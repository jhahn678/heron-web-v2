import { useState, useEffect } from 'react'

export const useValidatePassword = (value: string): Boolean => {

    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            const result = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(value)
            setIsValid(result)
        }, 300)

        return () => clearTimeout(timer)
    }, [value])

    return isValid;
}