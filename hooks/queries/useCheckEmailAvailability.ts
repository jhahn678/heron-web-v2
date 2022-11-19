import axios from "../../config/axios";
import { Dispatch, useEffect, useReducer } from 'react'

interface CheckEmailAvailabilityRes {
    email: string,
    valid: boolean,
    available: boolean
}

type Action = 
| { type: 'INPUT', value: string }
| { type: 'LOADING', value: boolean }
| { type: 'RESPONSE', value: CheckEmailAvailabilityRes}
| { type: 'RESET' }

interface EmailState {
    value: string
    valid: boolean,
    loading: boolean
    available: boolean
    touched: boolean
}

const initialState: EmailState = {
    value: '',
    valid: false,
    loading: false,
    available: false,
    touched: false
}

const reducer = (state: EmailState, action: Action) => {
    if(action.type === 'INPUT'){
        return { 
            ...state,
            touched: true,
            value: action.value,
            valid: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(action.value)
        } 
    }else if(action.type === 'LOADING'){
        return { ...state, loading: action.value}
    }else if(action.type === 'RESPONSE'){
        return { 
            ...state,  
            loading: false,
            available: action.value.available,
            valid: action.value.valid
        }
    }else if(action.type === 'RESET'){
        return initialState;
    }else{
        return state;
    }
}

export const useCheckEmailAvailability = (): [EmailState, Dispatch<Action>] => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    const queryEmail = async (email: string) => {
        const res = await axios.get<CheckEmailAvailabilityRes>(`/auth/email?email=${email}`)
        return res.data;
    }

    useEffect(() => {
        if(state.valid){
            const timer = setTimeout(async () => {
                dispatch({ type: 'LOADING', value: true })
                const response = await queryEmail(state.value)
                dispatch({ type: 'RESPONSE', value: response })
            },300)
            return () => clearTimeout(timer)
        }
    },[state.value])

    return [state, dispatch]
}