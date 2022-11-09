import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/layout/Header/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <Head><title>Heron Mobile</title></Head>
      <Header/>
      <main className={styles.main}>
        
      </main>
    </div>
  )
}
