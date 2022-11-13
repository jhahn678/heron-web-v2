import 'swiper/css';
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import styles from './WaterbodiesSlider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import WaterbodyCard from '../../cards/WaterbodyCard/WaterbodyCard';
import { WaterbodyListItem } from '../../../types/Waterbody';

const WaterbodiesSlider = () => {

    const data = { media: [] };

    return (
      <section className={styles.container}>
        <Typography variant={'h4'} className={styles.paddingX} fontWeight={600}>Fisheries Nearby</Typography>
        <Typography variant={'h5'} className={styles.paddingX} fontWeight={600} paddingTop={1} color={'primary'}>Harrisburg, Pennsylvania</Typography>
        <Stack direction={'row'} paddingY={4} className={styles.paddingX} overflow={'scroll'} gap={3}>
            <WaterbodyCard data={data as WaterbodyListItem}/>
            <WaterbodyCard data={data as WaterbodyListItem}/>
            <WaterbodyCard data={data as WaterbodyListItem}/>
        </Stack>
        <Button size='large' className={styles.button}>View More Fisheries</Button>
      </section>  
    )
};

export default WaterbodiesSlider;
