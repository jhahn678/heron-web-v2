import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@mui/material'
import Modal from '../components/modal/Modal'
import { apolloClient } from '../config/apollo'
import theme from '../config/theme'
import { useCurrentLocation } from '../hooks/utils/useCurrentLocation'
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }) {

  useCurrentLocation()

  return( 
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <SnackbarProvider maxSnack={3}>
          <Component {...pageProps} />
          <Modal/>
        </SnackbarProvider>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default MyApp
