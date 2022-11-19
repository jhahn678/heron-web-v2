import React from "react";
import styles from '../../../styles/Auth.module.css'
import Image from 'next/image'
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useCreateAccountReducer } from "../../../hooks/reducers/useCreateAccountReducer";
import { useCheckEmailAvailability } from "../../../hooks/queries/useCheckEmailAvailability";
import { useCheckUsernameAvailability } from "../../../hooks/queries/useCheckUsernameAvailability";
import { BsArrowLeft } from "react-icons/bs";


const Register = () => {

    const [state, dispatch] = useCreateAccountReducer()
    const [email, emailDispatch ] = useCheckEmailAvailability()
    const [username, usernameDispatch] = useCheckUsernameAvailability()

    return (
        <div className={styles.page}>
            <form className={styles.form}>
                <Button startIcon={<BsArrowLeft/>} className={styles.back}>Back</Button>
                <div className={styles.image}>
                    <Image src={'/logo-transparent-124.svg'} fill={true} alt={'Heron logo'}/>
                </div>
                <Typography variant={'h5'} fontWeight={600} color={'primary'} marginBottom={1}>Create your account</Typography>
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
                <Button variant={'contained'} fullWidth size={'large'}>Get Started</Button>
            </form>
        </div>
    );
};

export default Register;
