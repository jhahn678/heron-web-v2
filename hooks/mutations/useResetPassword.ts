import { useState } from 'react'
import axios from '../../config/axios'

export const useResetPassword = () => {

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const resetPassword = async (email: string) => {
        try{
            setLoading(true)
            const { data } = await axios.post('/auth/forgot-password', { email })
            return data;
        }catch(err){
            setError(true)
        }finally{
            setLoading(false)
        }
    }
    
    return { resetPassword, loading, error }
}