import axios from "../../config/axios";
import { Dispatch, useEffect, useReducer } from 'react'

interface CheckUsernameAvailabilityRes {
    username: string,
    available: boolean
}

type Action = 
| { type: 'INPUT', value: string }
| { type: 'LOADING', value: boolean }
| { type: 'RESPONSE', value: CheckUsernameAvailabilityRes}
| { type: 'RESET' }

interface UsernameState {
    value: string
    valid: boolean,
    loading: boolean
    available: boolean
    touched: boolean
}

const initialState: UsernameState = {
    value: '',
    valid: false,
    loading: false,
    available: false,
    touched: false
}

const reducer = (state: UsernameState, action: Action) => {
    if(action.type === 'INPUT'){
        return { 
            ...state,
            touched: true,
            value: action.value,
            valid: action.value.length > 5,
        } 
    }else if(action.type === 'LOADING'){
        return { ...state, loading: action.value}
    }else if(action.type === 'RESPONSE'){
        return { 
            ...state,  
            loading: false,
            available: action.value.available
        }
    }else if(action.type === 'RESET'){
        return initialState;
    }else{
        return state;
    }
}

export const useCheckUsernameAvailability = (): [UsernameState, Dispatch<Action>] => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    const queryUsername = async (username: string) => {
        const result = await axios.get<CheckUsernameAvailabilityRes>(`/auth/username?username=${username}`)
        return result.data;
    }

    useEffect(() => {
        if(state.valid){
            const timer = setTimeout(async () => {
                dispatch({ type: 'LOADING', value: true })
                const response = await queryUsername(state.value)
                dispatch({ type: 'RESPONSE', value: response })
            },300)
            return () => clearTimeout(timer)
        }
    },[state.value])

    return [state, dispatch]
}