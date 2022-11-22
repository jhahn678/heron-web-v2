import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@mui/material'
import Modal from '../components/modal/Modal'
import { apolloClient } from '../config/apollo'
import theme from '../config/theme'
import { useCurrentLocation } from '../hooks/utils/useCurrentLocation'
import { SnackbarProvider } from 'notistack';
import { useEffect } from 'react'
import { useAuth } from '../hooks/store/useAuth'
import { Tokens } from '../types/LocalStorage'

function MyApp({ Component, pageProps }) {

  const { autoSignIn } = useAuth()

  useCurrentLocation()

  useEffect(() => {
    if(localStorage.getItem(Tokens.accessToken)) autoSignIn()
  },[])

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
