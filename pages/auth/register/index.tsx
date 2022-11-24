import React from "react";
import styles from '../../../styles/Auth.module.css'
import Image from 'next/image'
import Link from "next/link";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useCreateAccountReducer } from "../../../hooks/reducers/useCreateAccountReducer";
import { useCheckEmailAvailability } from "../../../hooks/queries/useCheckEmailAvailability";
import { useCheckUsernameAvailability } from "../../../hooks/queries/useCheckUsernameAvailability";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import { useCreateAccount } from "../../../hooks/mutations/useCreateAccount";
import { useSnackbar } from 'notistack'
import LoadingBackdrop from "../../../components/modal/LoadingBackdrop/LoadingBackdrop";
import { useAuth } from "../../../hooks/store/useAuth";
import MyProfileCard from "../../../components/cards/MyProfileCard/MyProfileCard";
import Stack from "@mui/material/Stack";


const Register = () => {

    const auth = useAuth()
    const router = useRouter()
    const { enqueueSnackbar } = useSnackbar()
    const { createAccount, isLoading } = useCreateAccount()

    const [state, dispatch] = useCreateAccountReducer()
    const [email, emailDispatch] = useCheckEmailAvailability()
    const [username, usernameDispatch] = useCheckUsernameAvailability()

    const handleSubmit = () => createAccount({
        firstname: state.firstname.value,
        lastname: state.lastname.value,
        password: state.password.value,
        username: username.value,
        email: email.value
    }).then(() => {
        router.replace('/auth/register/profile')
        enqueueSnackbar('Successfully created your account!', { variant: 'success' })
    }).catch(() => {
        enqueueSnackbar('Error creating account', { variant: 'error'})
    })

    return (
        <div className={styles.page}>
            { auth.isAuthenticated ? 

                <div className={styles.form}>
                    <div className={styles.image}>
                        <Image src={'/logo-transparent-124.svg'} fill={true} alt={'Heron logo'}/>
                    </div>
                    <Typography variant={'h5'} fontWeight={600} color={'primary'} marginBottom={1}>
                        You are already logged in
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
                    <Button 
                        startIcon={<BsArrowLeft/>} 
                        className={styles.back}
                        onClick={() => router.back()}
                    >Back</Button>
                    <div className={styles.image}>
                        <Image src={'/logo-transparent-124.svg'} fill={true} alt={'Heron logo'}/>
                    </div>
                    <Typography 
                        variant={'h5'} 
                        fontWeight={600} 
                        color={'primary'} 
                        marginBottom={1}
                    >Create your account</Typography>
                    <TextField 
                        type={'text'}
                        label={'First Name'} 
                        className={styles.input}
                        value={state.firstname.value} 
                        error={!state.firstname.valid && state.firstname.touched}
                        onChange={e => dispatch({ type: 'FIRSTNAME', value: e.target.value})} 
                    />
                    <TextField 
                        type={'text'}
                        label={'Last Name'}
                        className={styles.input}
                        value={state.lastname.value} 
                        error={!state.lastname.valid && state.lastname.touched}
                        onChange={e => dispatch({ type: 'LASTNAME', value: e.target.value})} 
                        />
                    <TextField 
                        type={'email'}
                        label={'Email'}
                        value={email.value} 
                        className={styles.input}
                        error={email.touched && (!email.valid || !email.available)}
                        onChange={e => emailDispatch({ type: 'INPUT', value: e.target.value })} 
                    />
                    <TextField 
                        type={'email'}
                        label={'Username'} 
                        value={username.value} 
                        className={styles.input}
                        error={username.touched && (!username.valid || !username.available)}
                        onChange={e => usernameDispatch({ type: 'INPUT', value: e.target.value })} 
                    />
                    <TextField 
                        label={'Password'} 
                        className={styles.input}
                        value={state.password.value} 
                        type={state.password.visible ? 'text' : 'password'}
                        error={!state.password.valid && state.password.touched}
                        onChange={e => dispatch({ type: 'PASSWORD', value: e.target.value})} 
                        InputProps={{ 
                            endAdornment: state.password.visible ? 
                                <IconButton onClick={() => dispatch({ type: 'TOGGLE_PASSWORD'})}>
                                    <MdVisibilityOff/>
                                </IconButton> :
                                <IconButton onClick={() => dispatch({ type: 'TOGGLE_PASSWORD'})}>
                                    <MdVisibility/>
                                </IconButton>
                        }}
                    />
                    <TextField 
                        className={styles.input}
                        label={'Confirm password'} 
                        value={state.passwordConfirm.value} 
                        type={state.password.visible ? 'text' : 'password'}
                        error={!state.passwordConfirm.valid && state.passwordConfirm.touched}
                        onChange={e => dispatch({ type: 'PASSWORD_CONFIRM', value: e.target.value})} 
                        InputProps={{ 
                            endAdornment: state.password.visible ? 
                                <IconButton onClick={() => dispatch({ type: 'TOGGLE_PASSWORD'})}>
                                    <MdVisibilityOff/>
                                </IconButton> :
                                <IconButton onClick={() => dispatch({ type: 'TOGGLE_PASSWORD'})}>
                                    <MdVisibility/>
                                </IconButton>
                        }}
                    />
                    <Button 
                        variant={'contained'} 
                        fullWidth={true} 
                        size={'large'}
                        className={styles.button}
                        onClick={handleSubmit}
                        disabled={
                            !state.formValid || 
                            (!email.available || !email.valid) || 
                            (!username.available || !username.valid)
                        }
                    >Get Started</Button>
                    <Typography>Already have an account?
                        <Link href={'/auth/login'} className={styles.link}> Sign In</Link>
                    </Typography>
                </form>
            }
            {isLoading && <LoadingBackdrop/>}
        </div>
    );
};

export default Register;
