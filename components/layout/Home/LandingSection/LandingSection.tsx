import React from "react";
import styles from './LandingSection.module.css'
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from 'next/image'
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

const LandingSection = () => {

    const minWidth1000 = useMediaQuery('(min-width: 1000px)')
    
    return(
        <main className={styles.main}>
        <div className={styles.image}>
          <div className={styles.imageCircleOne}/>
          <div className={styles.imageCircleTwo}/>
          <Image src={'https://heron-static.s3.amazonaws.com/susquehanna-mapbox.png'} 
            fill={true} alt={'Image of susquehanna river on map'} style={{ borderRadius: '50%' }}/>
        </div>
        <Typography style={{ zIndex: 1 }} maxWidth={minWidth1000 ? 500 : 600} paddingX={2} textAlign={minWidth1000 ? 'left' : 'center'} variant={'h3'} fontWeight={600}>
          A Fully-Featured Fishing Companion
        </Typography>
        <div className={styles.linesImage}>
          <Image fill={true} alt={'sketched underline'} src={'/underline.svg'}/>
        </div>
        <Stack style={{ zIndex: 1 }} paddingX={2} gap={1}>
          <Typography variant={'h5'} fontWeight={500}>Discover new places to fish.</Typography>
          <Typography variant={'h5'} fontWeight={500}>Share your catches with friends.</Typography>
          <Typography variant={'h5'} fontWeight={500}>Download the Heron App today.</Typography>
        </Stack>
        <Stack direction={'row'} gap={2} style={{ zIndex: 1 }} paddingTop={3} marginLeft={minWidth1000 ? 2 : 0}>
          <Link href={'/'} target={'_blank'} rel={'noreferrer'}>
              <Image src={'/app-store.svg'} width={120} height={50} alt={'Download on the apple app store'}/>
          </Link>
          <Link href={'https://play.google.com/store/apps/details?id=com.jhahn678.heron&pli=1'} target={'_blank'} rel={'noreferrer'}>
              <Image src={'/play-store.svg'} width={132} height={50} alt={'Download on the google play store'} />
          </Link>
        </Stack>
      </main>
    );
};

export default LandingSection;
