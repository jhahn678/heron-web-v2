import axios from "../../config/axios";
import { AuthResponse } from '../../types/User'
import { useState } from 'react'
import { useAuth } from "../store/useAuth";

interface UseLoginArgs {
    onSuccess: (data: AuthResponse) => void,
    onError: (err: any) => void
}

interface LoginParams {
    identifier: string,
    password: string
}

/** Handles localStorage and auth store */
export const useLogin = ({ onSuccess, onError}: UseLoginArgs) => {

    const { setUser } = useAuth()

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const loginUser = async (params: LoginParams): Promise<AuthResponse | void> => {
        setIsLoading(true)
        axios.post<AuthResponse>('/auth/login', params, { withCredentials: true })
            .then(({ data }) => {
                setIsLoading(false)
                setUser(data)
                onSuccess(data)
                return data;
            })
            .catch(err => {
                console.error(err)
                setIsLoading(false)
                setIsError(true)
                onError(err)
            })
        
    }

    return {
        loginUser,
        isLoading,
        isError
    }

}
