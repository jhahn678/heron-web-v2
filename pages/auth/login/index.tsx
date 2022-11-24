import React, { useEffect, useState } from "react";
import styles from '../../../styles/Auth.module.css'
import Image from "next/image";
import { useAuth } from "../../../hooks/store/useAuth";
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import { useLogin } from "../../../hooks/mutations/useLogin";
import { useSnackbar } from 'notistack'
import { useRouter } from "next/router";
import MyProfileCard from "../../../components/cards/MyProfileCard/MyProfileCard";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const LoginPage = () => {

    const router = useRouter()
    const { enqueueSnackbar } = useSnackbar()
    const auth = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const { isError, isLoading, loginUser } = useLogin({
        onSuccess: () => {
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
            { auth.isAuthenticated ? 

                <div className={styles.form}>
                    <div className={styles.image}>
                        <Image src={'/logo-transparent-124.svg'} fill={true} alt={'Heron logo'}/>
                    </div>
                    <Typography variant={'h5'} fontWeight={600} color={'primary'} marginBottom={1}>
                        You are currently logged in as
                    </Typography>
                    <MyProfileCard/>
                    <Stack gap={1} width={'100%'} marginTop={1}>
                        <Button 
                            variant={"contained"}
                            size={'large'} 
                            className={styles.button}
                            onClick={() => router.push('/profile')}
                        >Go to my profile</Button>
                        <Button 
                            variant={'outlined'} 
                            size={'large'} 
                            className={styles.button}
                            onClick={auth.signOut}
                        >Sign out</Button>
                    </Stack>
                </div> :

                <form className={styles.form}>
                    <div className={styles.image}>
                        <Image src={'/logo-transparent-124.svg'} fill={true} alt={'Heron logo'}/>
                    </div>
                    <Typography variant={'h5'} fontWeight={600} color={'primary'} marginBottom={1}>
                        Sign in to Heron
                    </Typography>
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
                        type={showPassword ? 'text' : 'password'}
                        error={isError}
                        InputProps={{ endAdornment: 
                            <IconButton onClick={() => setShowPassword(x => !x)}>
                                {showPassword ? <MdVisibilityOff/> : <MdVisibility/>}
                            </IconButton>
                        }}
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
                            onClick={() => router.push('/auth/forgot-password')}
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
            }
        </div>
    );
};

export default LoginPage;
