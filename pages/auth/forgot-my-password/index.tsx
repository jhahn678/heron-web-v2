import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Image from 'next/image'
import styles from '../../../styles/Auth.module.css'
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";

const ForgotMyPassword = () => {

    const [email, setEmail] = useState('')

    const router = useRouter()

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        
    }

    return (
        <div className={styles.page}>
            <form className={styles.form}>
                <Button 
                    onClick={() => router.back()}
                    startIcon={<BsArrowLeft/>} 
                    className={styles.back}
                >Back</Button>
                <div className={styles.image}>
                    <Image src={'/logo-transparent-124.svg'} fill={true} alt={'Heron logo'}/>
                </div>
                <Typography 
                    variant={'h5'} 
                    fontWeight={600} 
                    color={'primary'} 
                    marginBottom={1}
                >Forgot My Password</Typography>
                <Typography marginBottom={1}>
                    Enter your email below and we'll send you an email if it's registered with an existing account
                </Typography>
                <TextField 
                    required={true} 
                    value={email} 
                    type={'email'} 
                    label={'Email'} 
                    fullWidth={true}
                    onChange={e => setEmail(e.target.value)}
                />
                <Button 
                    variant={'contained'} 
                    onClick={handleSubmit}
                    fullWidth={true}
                    size={'large'} 
                    className={styles.button}
                >Send Email</Button>
            </form>
        </div>
    )
};

export default ForgotMyPassword;
