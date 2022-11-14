import { useEffect, useState } from 'react'
import axios from '../../config/axios'
import { useLocationStore } from '../store/useLocationStore'

interface Response {
    geoplace: string
}

export const useReverseGeocode = () => {
    
    const { coords } = useLocationStore()

    const [loading, setLoading] = useState(true)
    const [geoplace, setGeoplace] = useState('')
    
    const getNearstGeoplace = async () => {
        try{
            const { data } = await axios.get<Response>(
                process.env.NEXT_PUBLIC_API_BASE_URL 
                + `/autocomplete/nearest-geoplace?lnglat=${coords.longitude},${coords.latitude}`
            )
            setLoading(false)
            setGeoplace(data.geoplace);
        }catch(err){
            setLoading(false)
        }
    }

    useEffect(() => {
        if(coords) getNearstGeoplace()
    },[coords])

    return { loading, geoplace }
}