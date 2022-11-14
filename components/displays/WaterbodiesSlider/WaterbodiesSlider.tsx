import 'swiper/css';
import { Button, CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";
import styles from './WaterbodiesSlider.module.css'
import WaterbodyCard from '../../cards/WaterbodyCard/WaterbodyCard';
import { WaterbodyListItem } from '../../../types/Waterbody';
import { useReverseGeocode } from '../../../hooks/queries/useReverseGeocode';

interface Props{
  data: WaterbodyListItem[] | undefined
}

const WaterbodiesSlider = ({ data }: Props) => {

  const { geoplace, loading } = useReverseGeocode()

    return (
      <section className={styles.container}>
        <Typography variant={'h4'} className={styles.paddingX} fontWeight={600}>Fisheries Nearby</Typography>
        {loading ?
          <CircularProgress color="secondary" /> :
          <Typography variant={'h5'} className={styles.paddingX} fontWeight={600} paddingTop={1} color={'primary'}>
            {geoplace}
          </Typography>
        }
        <Stack direction={'row'} paddingY={4} className={styles.paddingX} overflow={'scroll'} gap={3}>
          {data && data.map(x => <WaterbodyCard key={x.id} data={x}/>)}
        </Stack>
        <Button size='large' className={styles.button}>View More Fisheries</Button>
      </section>  
    )
};

export default WaterbodiesSlider;
