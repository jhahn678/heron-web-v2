import 'swiper/css';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import styles from './FeatureSlider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as ISwiper} from 'swiper/types'
import { Button, Typography } from '@mui/material';
import Stack from '@mui/system/Stack';
import FeatureSliderPagination from './FeatureSliderPagination';

const FeatureSlider = () => {

    const [index, setIndex] = useState(0)

    return (
        <Swiper
            className={styles.slider}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={slide => setIndex(slide.activeIndex)}
        >
            <SwiperSlide className={styles.slide}>
                <Stack className={styles.content} gap={2}>
                    <Typography variant={'h4'} fontWeight={500}>Discover New Waters</Typography>
                    <Typography variant={'h6'} fontWeight={400}>Plan your next fishing adventure with the help of Heron’s vast database of waterbodies.</Typography>
                    <Button variant={'contained'} size={'large'} sx={{ width: 'max-content' }}>Sign me up</Button>
                </Stack>
                <div className={styles.image}>
                    <Image 
                        src={'https://heron-static.s3.amazonaws.com/heron-home-screen-mockup.png'} 
                        fill={true} style={{ objectFit: 'contain' }} 
                        alt={'Image of Heron home screen'}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <Stack className={styles.content} gap={2}>
                    <Typography variant={'h4'} fontWeight={500}>Scout Your Destination</Typography>
                    <Typography variant={'h6'} fontWeight={400}>Read reviews from other fishermen, see where they're catching fish, and view the community's top fishing spots!</Typography>
                    <Button variant={'contained'} size={'large'} sx={{ width: 'max-content' }}>Sign me up</Button>
                </Stack>
                <div className={styles.image}>
                    <Image 
                        src={'https://heron-static.s3.amazonaws.com/phone-waterbody-map.png'} 
                        fill={true} style={{ objectFit: 'contain' }} 
                        alt={'Image of Heron Waterbody Map Screen'}
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <Stack className={styles.content} gap={2}>
                    <Typography variant={'h4'} fontWeight={500}>Share your catches</Typography>
                    <Typography variant={'h6'} fontWeight={400}>Looking for a place to brag about your new personal best? Share your catches with the community!</Typography>
                    <Button variant={'contained'} size={'large'} sx={{ width: 'max-content' }}>Sign me up</Button>
                </Stack>
                <div className={styles.image}>
                    <Image 
                        src={'https://heron-static.s3.amazonaws.com/Phone-catch.png'} 
                        fill={true} style={{ objectFit: 'contain' }} 
                        alt={'Image of Heron home screen'}
                    />
                </div>
            </SwiperSlide>
            <FeatureSliderPagination index={index}/>
        </Swiper>
    );
};

export default FeatureSlider;
