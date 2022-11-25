import React from "react";
import styles from '../../styles/Profile.module.css'
import Head from "next/head";
import Header from "../../components/layout/Header/Header";
import Page from "../../components/layout/Page/Page";
import { useAuth } from "../../hooks/store/useAuth";
import { nameToInitials } from "../../utils/transforms/nameToInitials";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const MyProfilePage = () => {

    const auth = useAuth()
    const router = useRouter()

    return (
        <Page className={styles.page}>
            <Head><title>My Profile -- Heron Mobile</title></Head>
            <Header/>
            <div className={styles.heading}>
                <Typography variant={'h6'} fontWeight={500} color={'var(--secondaryLight)'}>My Profile</Typography>
                <Chip color="secondary" label="Edit profile" onClick={() => router.push('/profile/edit')}/>
            </div>
            <Stack direction={'row'} alignItems={'center'} gap={2} paddingY={2} paddingX={2}>
                <Avatar src={auth.avatar} className={styles.avatar}>
                    {nameToInitials(auth.firstname, auth.lastname)}
                </Avatar>
                <Stack gap={.5}>
                    <Typography variant={'h5'} fontWeight={500}>{auth.firstname} {auth.lastname}</Typography>
                    <Chip label={`@${auth.username}`} size='medium' variant="outlined"/>
                </Stack>
            </Stack>
        </Page>
    );
};

export default MyProfilePage;
