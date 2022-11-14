import axios from '../../config/axios'
import { useState } from 'react'
import { LinkedAccount } from '../../types/User'
// import { useModalStore } from '../../store/modal/useModalStore'

interface Args {
    onSuccess: () => void
    onError: () => void
}

export const useUnlinkSocial = (args: Args) => {

    // const showAuthModal = useModalStore(store => store.setReauthenticate)

    const [loading, setLoading] = useState(false)

    const unlinkAccount = async (account: LinkedAccount) => {
        try{
            setLoading(true)
            await axios.post('/auth/unlink-account', { account })
            setLoading(false)
            args.onSuccess()
        }catch(err){
            setLoading(false)
            console.error('useUnlinkSocial', err)
            args.onError()
        }
    }

    return { loading, unlinkAccount }
}