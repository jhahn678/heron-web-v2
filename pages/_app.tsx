import { ThemeProvider } from '@mui/material'
import Modal from '../components/modal/Modal'
import theme from '../config/theme'
import { useCurrentLocation } from '../hooks/utils/useCurrentLocation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  useCurrentLocation()

  return( 
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Modal/>
    </ThemeProvider>
  )
}

export default MyApp
