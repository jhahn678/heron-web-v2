import { Dispatch, useEffect, useReducer } from "react"

type Action = 
| { type: 'FIRSTNAME', value: string }
| { type: 'LASTNAME', value: string }
| { type: 'PASSWORD', value: string }
| { type: 'PASSWORD_CONFIRM', value: string }
| { type: 'VALIDATE_FORM' }
| { type: 'TOGGLE_PASSWORD' }
| { type: 'RESET' }


interface CreateAccountState {
    formStep: number,
    formValid: boolean,
    firstname: {
        value: string,
        valid: boolean,
        touched: boolean
    },
    lastname: {
        value: string,
        valid: boolean,
        touched: boolean
    },
    password: {
        value: string,
        valid: boolean,
        touched: boolean,
        visible: boolean
    },
    passwordConfirm: {
        value: string,
        valid: boolean,
        touched: boolean
    }
}

const createAccountState: CreateAccountState = {
    formStep: 0,
    formValid: false,
    firstname: {
        value: '',
        valid: false,
        touched: false
    },
    lastname: {
        value: '',
        valid: false,
        touched: false
    },
    password: {
        value: '',
        valid: false,
        touched: false,
        visible: false
    },
    passwordConfirm: {
        value: '',
        valid: false,
        touched: false
    }
}


const createAccountReducer = (state: CreateAccountState, action: Action): CreateAccountState => {
    if(action.type === 'FIRSTNAME'){
        return {
            ...state,
            firstname: {
                value: action.value,
                valid: action.value.length > 0,
                touched: true
            }
        }
    }else if(action.type === 'LASTNAME'){
        return {
            ...state,
            lastname: {
                value: action.value,
                valid: action.value.length > 0,
                touched: true
            }
        }
    }else if(action.type === 'PASSWORD'){
        const { password , passwordConfirm } = state;
        return {
            ...state,
            password: {
                value: action.value,
                valid: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(action.value),
                touched: true,
                visible: password.visible
            },
            passwordConfirm: {
                ...passwordConfirm,
                valid: action.value === passwordConfirm.value
            }
        }
    }else if(action.type === 'PASSWORD_CONFIRM'){
        const { password } = state;
        return {
            ...state,
            passwordConfirm: {
                value: action.value,
                valid: action.value === password.value,
                touched: true
            }
        }
    }else if(action.type === 'TOGGLE_PASSWORD'){
        const { password } = state;
        return {
            ...state,
            password: {
                ...password,
                visible: !password.visible
            }
        }
    }else if(action.type === 'RESET'){
        return createAccountState;
    }else if(action.type === 'VALIDATE_FORM'){
        const { firstname, lastname, password, passwordConfirm } = state;
        return {
            ...state,
            formValid: Boolean(firstname.valid && lastname.valid && password.valid && passwordConfirm.valid)
        }
    }else{
        return state;
    }
}

export const useCreateAccountReducer = (): [CreateAccountState, Dispatch<Action>] => {
    const [state, dispatch] = useReducer(createAccountReducer, createAccountState);

    useEffect(() => {
        dispatch({ type: 'VALIDATE_FORM' })
    },[
        state.firstname.valid, 
        state.lastname.valid, 
        state.password.valid, 
        state.passwordConfirm.valid
    ])

    return [state, dispatch]
}
    

