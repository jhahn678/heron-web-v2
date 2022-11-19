import React, { useEffect, useState } from "react";
import styles from './Header.module.css'
import Image from "next/image";
import Link from "next/link";
import { Avatar, Button, Divider, Drawer, IconButton, Stack, useMediaQuery } from "@mui/material";
import { BiMenuAltRight } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { useAuth } from "../../../hooks/store/useAuth";
import { useRouter } from "next/router";

interface Props {
    fixed?: boolean
}

const Header = ({ fixed }: Props) => {

    const router = useRouter()

    const [drawer, setDrawer] = useState(false)
    const maxWidth750 = useMediaQuery('(max-width: 750px)')

    const { isAuthenticated, avatar, firstname } = useAuth()
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setHasScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <header 
            className={styles.container} 
            style={{ 
                position: fixed ? 'fixed' : 'unset', 
                backgroundColor: hasScrolled ? 'var(--secondaryLight)' : undefined
            }}
        >
            <div className={'frac'}>
                <Image src={'/logo-transparent-124.svg'} height={90} width={90} alt={'Heron logo'}/>
                <h3 className={styles.title}>Heron</h3>
            </div>
            { maxWidth750 ? 
                <>
                    <Drawer anchor={'left'} open={drawer} onClose={() => setDrawer(false)}>
                        <div className={styles.drawer}>
                            <div className={styles.drawerHeader}>
                                <IconButton onClick={() => setDrawer(false)}>
                                    <MdClose size={36} color={'var(--primary)'}/>
                                </IconButton>
                            </div>
                            <ul className={styles.drawerList}>
                                <li className={styles.drawerLink}><Link href={'/'}>Home</Link></li>
                                <li className={styles.drawerLink}><Link href={'/explore'}>Explore</Link></li>
                                <li className={styles.drawerLink}><Link href={'/profile'}>Profile</Link></li>
                                <li className={styles.drawerLink}><Link href={'/support'}>Support</Link></li>
                                <Divider />
                                <li className={styles.drawerLinkSmall}><Link href={'/faq'}>FAQ</Link></li>
                                <li className={styles.drawerLinkSmall}><Link href={'/privacy-policy.html'}>Privacy Policy</Link></li>
                                <li className={styles.drawerLinkSmall}><Link href={'/terms-of-service.html'}>Terms of Service</Link></li>
                                <Divider style={{ marginBottom: 16}}/>
                                <Stack gap={1}>
                                    <Button variant="contained" size="large">Sign in</Button>
                                    <Button variant="contained" size="large">I&#39;m new here</Button>
                                </Stack>
                            </ul>
                            <Stack direction={'row'} spacing={1} justifyContent={'center'}>
                                <a href={'/'} target={'_blank'} rel={'noreferrer'}>
                                    <Image width={135} height={45} alt={'Download on the apple app store'} src={'/app-store.svg'}/>
                                </a>
                                <a href={'https://play.google.com/store/apps/details?id=com.jhahn678.heron&pli=1'} target={'_blank'} rel={'noreferrer'}>
                                    <Image width={152} height={45} alt={'Download on the google play store'} src={'/play-store.svg'}/>
                                </a>
                            </Stack>
                        </div>
                    </Drawer>
                    <IconButton onClick={() => setDrawer(true)}><BiMenuAltRight size={40} color={'var(--primary)'}/></IconButton>
                </> :
                <ul className={styles.navList}>
                    <li className={styles.navLink}><Link href={'/explore'}>Explore</Link></li>
                    <li className={styles.navLink}><Link href={'/profile'}>Profile</Link></li>
                    <li className={styles.navLink}><Link href={'/support'}>Support</Link></li>
                    {isAuthenticated ? 
                        avatar ?
                            <Avatar src={avatar} alt={'User Avatar'} className={styles.avatar}/> :
                        firstname ?
                            <Avatar sx={{ bgcolor: 'var(--primary)' }} className={styles.avatar}>{firstname[0]}</Avatar> :
                            <Avatar sx={{ bgcolor: 'var(--primary)' }} className={styles.avatar}/> :
                            <Button 
                                size="large" 
                                variant="contained" 
                                onClick={() => router.push('/auth/login')}
                            >Sign in</Button>
                    }
                </ul>
            }
        </header>
    )
};

export default Header;
