import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@mui/material'
import Modal from '../components/modal/Modal'
import { apolloClient } from '../config/apollo'
import theme from '../config/theme'
import { useCurrentLocation } from '../hooks/utils/useCurrentLocation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  useCurrentLocation()

  return( 
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
        <Modal/>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default MyApp
