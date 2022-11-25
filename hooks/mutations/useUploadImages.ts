import { AxiosError } from 'axios';
import axios from '../../config/axios'
import { useAuth } from '../store/useAuth';
import { FileWithPath } from '@mantine/dropzone'

export interface UploadRes {
    key: string, 
    url: string
}

interface GetSignedUrlRes {
    signedUrl: string | null
    meta?: {
        mimetype: string
        issuedAt: Date
    }
}

export const useUploadImages = () => {

    const getAccessToken = useAuth(store => store.getAccessToken)

    /**
     * #### Multiple attempts and no signed url means there was an error with authentication
     * @param mimetype mimetype from image
     * @returns Object with signedUrl and meta obj
     */
    const getSignedUrl = async (mimetype: string): Promise<GetSignedUrlRes> => {
        try{
            const res = await axios.get<string>(`/upload/signed-url?mimetype=${mimetype}`)
            return { 
                signedUrl: res.data,
                meta: {
                    issuedAt: new Date(),
                    mimetype
                }
            }
        }catch(error){
            const err = error as AxiosError;
            if(err?.response?.status === 401){
                const token = await getAccessToken()
                if(!token) return { signedUrl: null }
                try{
                    const resTwo = await axios.get<string>(`/upload/signed-url?mimetype=${mimetype}`)
                    return { 
                        signedUrl: resTwo.data,
                        meta: {
                            issuedAt: new Date(),
                            mimetype
                        }
                    }
                }catch(err){
                    return { signedUrl: null }
                }
            }
            return { signedUrl: null }
        }
    }

    const uploadToS3 = async (images: FileWithPath[]): Promise<UploadRes[]> => {
        const uploads: UploadRes[] = [];
        for(let image of images){
            try{
                const { signedUrl } = await getSignedUrl(image.type)
                if(!signedUrl) continue;
                const formData = new FormData();
                formData.append('file', image)
                const upload = await fetch(signedUrl, { 
                    method: 'PUT', 
                    body: formData, 
                    headers: { "Content-Type": "multipart/form-data" }
                })
                if(upload.status !== 200) throw new Error('Image upload failed')
                const url = upload.url.split('?')[0];
                const key = url.split('/').pop() as string;
                uploads.push({ url, key })
            }catch(err){
                console.log(err)
            }
        }
        return uploads;
    }

    return { uploadToS3, getSignedUrl };
}