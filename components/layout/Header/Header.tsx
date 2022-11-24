import React, { useEffect, useState } from "react";
import styles from './Header.module.css'
import Image from "next/image";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import useMediaQuery from '@mui/material/useMediaQuery'
import { BiMenuAltRight } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { useAuth } from "../../../hooks/store/useAuth";
import { useRouter } from "next/router";
import { nameToInitials } from "../../../utils/transforms/nameToInitials";

interface Props {
    fixed?: boolean
}

const Header = ({ fixed }: Props) => {

    const auth = useAuth()
    const router = useRouter()

    const [drawer, setDrawer] = useState(false)
    const [hasScrolled, setHasScrolled] = useState(false)
    const maxWidth750 = useMediaQuery('(max-width: 750px)')

    const handleSignOut = () => { auth.signOut(); setDrawer(false) }

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
                                { auth.isAuthenticated ? 
                                    <Stack gap={2}>
                                        <Divider/>
                                        <li className={styles.drawerLinkSmall}><Link href={'/settings'}>Settings</Link></li>
                                        <li className={styles.drawerLinkSmall} onClick={handleSignOut}>Sign out</li>
                                    </Stack> :
                                    <Stack gap={1}>
                                        <Divider style={{ marginBottom: 16}}/>
                                        <Button 
                                            variant="contained" size="large" 
                                            onClick={() => router.push('/auth/login')}
                                        >Sign in</Button>
                                        <Button 
                                            variant="contained" size="large" 
                                            onClick={() => router.push('/auth/register')}
                                        >I&#39;m new here</Button>
                                    </Stack>
                                }
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
                    {auth.isAuthenticated ? 
                        <Avatar 
                            src={auth.avatar} 
                            sx={{ bgcolor: 'var(--primary)' }} 
                            alt={'Your profile'} 
                            className={styles.avatar}
                            onClick={() => router.push('/profile')}
                        >
                            {nameToInitials(auth.firstname, auth.lastname)}
                        </Avatar> :
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
