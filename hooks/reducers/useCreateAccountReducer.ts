import { useReducer } from "react"

type Action = 
| { type: 'FIRSTNAME', value: string }
| { type: 'LASTNAME', value: string }
| { type: 'PASSWORD', value: string }
| { type: 'PASSWORD_CONFIRM', value: string }
| { type: 'CITY', value: string }
| { type: 'STATE', value: string }
| { type: 'BIO', value: string }
| { type: 'TOGGLE_PASSWORD' }
| { type: 'RESET' }
| { type: 'NEXT_STEP' }
| { type: 'LAST_STEP' }


interface CreateAccountState {
    formStep: number,
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
    },
    city: {
        value: string,
    },
    state: {
        value: string,
    },
    bio: {
        value: string,
    }
}

const createAccountState: CreateAccountState = {
    formStep: 0,
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
    },
    city: {
        value: ''
    },
    state: {
        value: ''
    },
    bio: {
        value: ''
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
        const { password } = state;
        return {
            ...state,
            password: {
                value: action.value,
                valid: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(action.value),
                touched: true,
                visible: password.visible
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
    }else if(action.type === 'CITY'){
        return {
            ...state,
            city: {
                value: action.value
            }
        }
    }else if(action.type === 'STATE'){
        return {
            ...state,
            state: {
                value: action.value
            }
        }
    }else if(action.type === 'BIO'){
        return {
            ...state,
            bio: {
                value: action.value
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
    }else if(action.type === 'NEXT_STEP'){
        const { formStep } = state;
        return {
            ...state,
            formStep: formStep < 3 ? formStep + 1 : 3
        }
    }else if(action.type === 'LAST_STEP'){
        const { formStep } = state;
        return {
            ...state,
            formStep: formStep > 0 ? formStep - 1 : 0
        }
    }else if(action.type === 'RESET'){
        return createAccountState;
    }else{
        return state;
    }
}

export const useCreateAccountReducer = () => useReducer(createAccountReducer, createAccountState);
    

