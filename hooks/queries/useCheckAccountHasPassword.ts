import axios from "../../config/axios";

import { useEffect, useState } from "react";

interface Args {
    onError: () => void
}

export const useCheckAccountHasPassword = ({ onError }: Args) => {

    const [hasPassword, setHasPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        (async (): Promise<{ hasPassword: boolean } | void> => {
            try{
                setLoading(true)
                const res = await axios.get<{ hasPassword: boolean }>('/auth/has-password')
                setLoading(false); setError(false); setSuccess(true)
                setHasPassword(res.data.hasPassword)
            }catch(err){
                setLoading(false); setError(true); 
                setSuccess(false); setHasPassword(false)
                console.error('useCheckAccountHasPassword', err)
                onError()
            }
        })()
    },[])

    return { hasPassword, loading, success, error }

}