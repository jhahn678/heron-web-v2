import React from "react";
import styles from './Footer.module.css'
import Image from "next/image";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { BsGithub } from 'react-icons/bs'

const Footer = () => {

    const maxWidth800 = useMediaQuery('(max-width: 800px)')
    
    return (
        <footer className={styles.footer}>
            <div className={styles.logoSection}>
                <div className={styles.logoSectionImage}><Image src={'/heron-logo-white-1024.png'} fill alt={"Heron logo"}/></div>
                <div>
                    <Typography variant="h6" color={'var(--primary)'} fontWeight={600}>Heron Mobile</Typography>
                    <Typography variant="subtitle2">Find your next fishing adventure</Typography>
                </div>
            </div>
            <div className={styles.linkSection}>
                <div className={styles.linkSectionColumn}>
                    <Link href={'/profile'}><Typography variant={'body1'}>Profile</Typography></Link>
                    <Link href={'/explore'}><Typography variant={'body1'}>Explore</Typography></Link>
                    <Link href={'/account'}><Typography variant={'body1'}>Account</Typography></Link>
                    <Link href={'/friends'}><Typography variant={'body1'}>Community</Typography></Link>
                </div>
                <div className={styles.linkSectionColumn}>
                    <Link href={'/faq'}><Typography variant={'body1'}>FAQ</Typography></Link>
                    <Link href={'/contact'}><Typography variant={'body1'}>Contact</Typography></Link>
                    <Link href={'/privacy-policy.html'}><Typography variant={'body1'}>Privacy Policy</Typography></Link>
                    <Link href={'/terms-of-service.html'}><Typography variant={'body1'}>Terms of Service</Typography></Link>
                </div>
            </div>
            <div className={styles.stack}>
                <Link href={''} target={'_blank'} rel={'noreferrer'}>
                    <Stack direction={'row'} alignItems={'center'} gap={1}>
                        <BsGithub size={32} color={'var(--primary)'}/>
                        <Typography variant={'h6'} color={'var(--primary)'}>Github</Typography>
                    </Stack>
                </Link>
                <Stack className={styles.downloadSectionStores} direction={'row'} gap={1}>
                    <Link href={'/'} target={'_blank'} rel={'noreferrer'}>
                        <Image src={'/app-store.svg'} width={100} height={45} alt={'Download on the apple app store'}/>
                    </Link>
                    <Link href={'https://play.google.com/store/apps/details?id=com.jhahn678.heron&pli=1'} target={'_blank'} rel={'noreferrer'}>
                        <Image src={'/play-store.svg'} width={110} height={45} alt={'Download on the google play store'} />
                    </Link>
                </Stack>
            </div>
        </footer>
    );
};

export default Footer;
