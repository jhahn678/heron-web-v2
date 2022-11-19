import Head from 'next/head'
import Footer from '../components/layout/Footer/Footer'
import Header from '../components/layout/Header/Header'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import FisheriesCard from '../components/displays/FisheriesCard/FisheriesCard'
import FeatureSlider from '../components/displays/FeatureSlider/FeatureSlider'
import WaterbodiesSlider from '../components/displays/WaterbodiesSlider/WaterbodiesSlider'
import SharePicturesSection from '../components/layout/Home/SharePicturesSection/SharePicturesSection'
import FAQSection from '../components/layout/Home/FAQSection.tsx/FAQSection'
import { useGetNearbyWaterbodies } from '../hooks/queries/useGetNearbyWaterbodies'
import LandingSection from '../components/layout/Home/LandingSection/LandingSection'

export default function Home() {

  const { data, error } = useGetNearbyWaterbodies()

  return (
    <div className={styles.page}>
      <Head><title>Heron Mobile</title></Head>
      <Header fixed={true}/>
      <LandingSection/>
      <section className={styles.fisheriesSection}>
        <FisheriesCard/>
        <div className={styles.fisheriesSectionText}>
          <Typography variant='h6' maxWidth={400} className={styles.typeh6}>
            Plan your next fishing adventure with the help of Heron’s vast database of waterbodies.
          </Typography>
          <div className={styles.squiggleImage}>
            <Image fill={true} alt={'squiggly underline'} src={'/squiggle.svg'}/>
          </div>
        </div>
      </section>
      <section className={styles.featureSliderSection}>
        <FeatureSlider/>
      </section>
      <WaterbodiesSlider data={data?.waterbodies}/>
      <SharePicturesSection/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}
