import React, { useEffect, useState } from "react";
import styles from '../../../styles/Auth.module.css'
import Image from "next/image";
import { useAuth } from "../../../hooks/store/useAuth";
import { Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import { useLogin } from "../../../hooks/mutations/useLogin";
import { useSnackbar } from 'notistack'
import { useRouter } from "next/router";

const LoginPage = () => {

    const router = useRouter()
    const isAuthenticated = useAuth(store => store.isAuthenticated)

    useEffect(() => {
        if(isAuthenticated) router.replace('/profile')
    },[])

    const setUser = useAuth(store => store.setUser)

    const { enqueueSnackbar } = useSnackbar()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { isError, isLoading, loginUser } = useLogin({
        onSuccess: (res) => {
            setUser(res);
            router.push('/');
            enqueueSnackbar('Login successful', { variant: 'success' })
        },
        onError: () => {
            enqueueSnackbar('Invalid credentials', { variant: 'error' })
        },
    })

    const handleLogin = () => {
        if(email.length < 5) return enqueueSnackbar('Email invalid', { variant: 'error' })
        if(password.length < 7) return enqueueSnackbar('Password invalid', { variant: 'error' })
        loginUser({ identifier: email, password })
    }

    return(
        <div className={styles.page}>
            <form className={styles.form}>
                <div className={styles.image}>
                    <Image src={'/logo-transparent-124.svg'} fill={true} alt={'Heron logo'}/>
                </div>
                <Typography variant={'h5'} fontWeight={600} color={'primary'} marginBottom={1}>Sign in to Heron</Typography>
                <TextField 
                    label={'Email'} 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    type={'email'}
                    error={isError}
                    className={styles.input}
                />
                <TextField 
                    label={'Password'} 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    type={'password'}
                    error={isError}
                    className={styles.input}
                />
                <Stack gap={1} width={'100%'}>
                    <Button 
                        variant="contained" 
                        size={'large'} 
                        className={styles.button}
                        onClick={handleLogin}
                    >{isLoading ? <CircularProgress color="secondary" size={28}/> : "Sign in"}</Button>
                    <Button 
                        variant='outlined' 
                        size={'large'} 
                        className={styles.button}
                        onClick={() => router.push('/auth/forgot-my-password')}
                    >Forgot My Password</Button>
                </Stack>
                <Typography>OR</Typography>
                 <Stack gap={1} width={'100%'}>
                    <Button 
                        variant="contained" 
                        size={'large'} 
                        className={styles.button} 
                        startIcon={<FcGoogle/>}
                    >Sign in with Google</Button>
                    <Button 
                        variant='contained' 
                        size={'large'} 
                        className={styles.button} 
                        startIcon={<FaFacebookSquare/>}
                    >Sign in with Facebook</Button>
                </Stack>
                <Typography>Don't have an account?
                    <Link href={'/auth/register'} className={styles.link}> Sign Up</Link>
                </Typography>
            </form>
        </div>
    );
};

export default LoginPage;
