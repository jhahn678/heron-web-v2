import axios from '../../config/axios'
import { useState } from 'react'

interface Args {
    onSuccess: () => void
    onError: () => void
}

export const useAddAccountPassword = (args: Args) => {

    const [loading, setLoading] = useState(false)

    const addAccountPassword = async (password: string) => {
        try{
            setLoading(true)
            await axios.post('/auth/add-password',{ password })
            setLoading(false)
            args.onSuccess()
        }catch(err){
            setLoading(false)
            console.error('useUnlinkSocial', err)
            args.onError()
        }
    }

    return { loading, addAccountPassword }
}