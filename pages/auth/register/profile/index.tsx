import { useState } from "react";
import styles from '../../../../styles/Auth.module.css'
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineImage, MdOutlineImageNotSupported } from 'react-icons/md'
import { IoMdCheckmark } from 'react-icons/io'
import { useEditProfile } from "../../../../hooks/mutations/useEditProfile";
import LoadingBackdrop from "../../../../components/modal/LoadingBackdrop/LoadingBackdrop";
import { useSnackbar } from 'notistack'
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import { useUploadImages } from "../../../../hooks/mutations/useUploadImages";
import { useChangeAvatar } from "../../../../hooks/mutations/useChangeAvatar";


const RegisterProfile = () => {

    const router = useRouter()
    const notification = useSnackbar()

    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [bio, setBio] = useState('')
    const [image, setImage] = useState<FileWithPath | null>(null)

    const handleRemoveImage = () => setImage(null)
    const handleFileReject = () => notification.enqueueSnackbar('Could not save image', { variant: 'error' })
    const handleSkip = () => router.push('/')

    const { uploadToS3 } = useUploadImages()
    const [updateProfile, { loading: updateProfileLoading }] = useEditProfile()
    const [updateAvatar, { loading: updateAvatarLoading }] = useChangeAvatar()

    const handleSaveDetails = async () => {
        if(image){
            const [response] = await uploadToS3([image])
            if(!response) return notification.enqueueSnackbar(
                'Error saving profile image', { variant: 'error' }
            );
            await updateAvatar({ variables: { avatar: response }})
        }
        updateProfile({ variables: { details: { bio, city, state } }})
            .then(() => {
                notification.enqueueSnackbar('Your profile has been updated', { variant: 'success' })
                router.push('/')
            })
            .catch(() => notification.enqueueSnackbar('Error saving profile', { variant: 'error' }))
    }

    return (
        <div className={styles.page}>
            <form className={styles.form}>
                <div className={styles.image}>
                    <Image src={'/logo-transparent-124.svg'} fill={true} alt={'Heron logo'}/>
                </div>
                <Typography
                    variant={'h5'} 
                    fontWeight={600} 
                    color={'primary'} 
                    marginBottom={1}
                >Complete your profile</Typography>
                <Dropzone
                    onDrop={([file]) => setImage(file)}
                    onReject={handleFileReject}
                    accept={IMAGE_MIME_TYPE}
                    className={styles.dropzone}
                    style={
                        image ? { 
                            backgroundImage: `url(${URL.createObjectURL(image)})`,
                            height: 250,
                            borderRadius: 32
                        } : undefined
                    }
                >
                    {image === null &&
                        <Stack alignItems={'center'} justifyContent={'center'} gap={1}>
                            <Dropzone.Accept>
                                <MdOutlineImage size={48} color={'green'}/>
                            </Dropzone.Accept>
                            <Dropzone.Reject>
                                <MdOutlineImageNotSupported size={48}/>
                            </Dropzone.Reject>
                            <Dropzone.Idle>
                                <MdOutlineImage size={48} color={'var(--primary)'}/>
                            </Dropzone.Idle>
                            <Typography>Add a profile picture</Typography>
                        </Stack>
                    }
                </Dropzone>
                { image && <Button fullWidth onClick={handleRemoveImage}>Remove Image</Button>}
                <Stack direction={'row'} gap={1} width={'100%'}>
                    <TextField 
                        type={'text'}
                        value={city} 
                        label={'City'} 
                        className={styles.input}
                        onChange={e => setCity(e.target.value)} 
                    />
                    <TextField 
                        type={'text'}
                        value={state} 
                        label={'State'}
                        className={styles.input}
                        onChange={e => setState(e.target.value)} 
                    />
                </Stack>
                <TextField
                    value={bio} 
                    multiline={true}
                    minRows={4}
                    type={'text'}
                    label={'Bio'}
                    className={styles.input}
                    onChange={e => setBio(e.target.value)} 
                />
                 <Stack gap={1} width={'100%'}>
                    <Button 
                        variant={'contained'} 
                        className={styles.button} 
                        fullWidth={true}
                        size={'large'}
                        endIcon={<IoMdCheckmark/>}
                        onClick={handleSaveDetails}
                    >Save Details</Button>
                    <Button 
                        variant={'outlined'} 
                        className={styles.button} 
                        fullWidth={true} 
                        size={'large'}
                        endIcon={<BsArrowRight/>}
                        onClick={handleSkip}
                    >Skip this step</Button>
                </Stack>
            </form>
            {Boolean(updateProfileLoading || updateAvatarLoading) && <LoadingBackdrop/>}
        </div>
    );
};

export default RegisterProfile;
