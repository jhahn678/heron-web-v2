import 'swiper/css';
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from "react";
import styles from './WaterbodiesSlider.module.css'
import WaterbodyCard from '../../cards/WaterbodyCard/WaterbodyCard';
import { WaterbodyListItem } from '../../../types/Waterbody';
import { useReverseGeocode } from '../../../hooks/queries/useReverseGeocode';
import Skeleton from 'react-loading-skeleton'
import { BiRefresh } from 'react-icons/bi';

interface Props{
  data: WaterbodyListItem[] | undefined
  loading: boolean | undefined
  refetch: () => void
}

const WaterbodiesSlider = ({ data, loading, refetch }: Props) => {

  const { geoplace, loading: geocodeLoading } = useReverseGeocode()

    return (
      <section className={styles.container}>
        <Typography variant={'h4'} className={styles.paddingX} fontWeight={600}>Fisheries Nearby</Typography>
        {geocodeLoading ?
          <CircularProgress color="secondary" /> :
          <Typography variant={'h5'} className={styles.paddingX} fontWeight={600} paddingTop={1} color={'primary'}>
            {geoplace}
          </Typography>
        }
        {loading ?
          new Array(6).fill(null).map((_, i) => <Skeleton key={i.toString()} className={styles.loader}/>)
          : data ? 
          <Stack direction={'row'} paddingY={4} className={styles.paddingX} overflow={'scroll'} gap={3}>
            {data.map(x => <WaterbodyCard key={x.id} data={x}/>)}
          </Stack> : 
          <Button endIcon={<BiRefresh size={32}/>} onClick={() => refetch()} className={styles.errorButton}>
            <Typography variant={'h5'}>Error loading fisheries</Typography>
          </Button>
        }
        <Button size='large' className={styles.button}>View More Fisheries</Button>
      </section>  
    )
};

export default WaterbodiesSlider;
