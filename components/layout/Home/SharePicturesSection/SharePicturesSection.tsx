import React from "react";
import styles from './SharePicturesSection.module.css'
import Typography from "@mui/material/Typography";
import Image from 'next/image'
import Button from "@mui/material/Button";

const SharePicturesSection = () => {
  return (
    <section className={styles.container}>
        <div className={styles.top}>
            <div className={styles.image}>
                <Image 
                    src={"https://heron-static.s3.amazonaws.com/unsplash-yosemite.png"} 
                    fill={true} alt={'Picture of a like'} 
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={styles.main}>
                <Typography 
                    variant={'h4'} 
                    fontWeight={600} 
                    color={'primary'} 
                    marginTop={6}
                >Like to take pictures?</Typography>
                <Typography paddingY={3} maxWidth={400} className={styles.text}>
                    You may have noticed a few placeholder images above. 
                    Heron is a new platform, and we’re still a bit short on user-uploaded images. 
                    Orginal contributions are encouraged, and enhance the experience for all users!
                </Typography>
            </div>
        </div>
        <div className={styles.bottom}>
            <Typography color={'white'} variant={'body2'}>Ready to share some pictures?</Typography>
            <Button variant="contained" color={'secondary'} className={styles.button}>Get Started</Button>
        </div>
    </section>
  );
};

export default SharePicturesSection;
