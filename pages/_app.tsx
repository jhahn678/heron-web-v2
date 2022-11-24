import '../styles/globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from '@mui/material'
import Modal from '../components/modal/Modal'
import { apolloClient } from '../config/apollo'
import theme from '../config/theme'
import { useCurrentLocation } from '../hooks/utils/useCurrentLocation'
import { SnackbarProvider } from 'notistack';
import { useEffect, useRef } from 'react'
import { useAuth } from '../hooks/store/useAuth'
import { Tokens } from '../types/LocalStorage'

function MyApp({ Component, pageProps }) {

  useCurrentLocation()

  const autoSignIn = useAuth(store => store.autoSignIn)

  const signInAttempted = useRef(false)

  useEffect(() => {
    if(signInAttempted.current) return;
    if(localStorage.getItem(Tokens.accessToken)){
      signInAttempted.current = true;
      autoSignIn()
    }
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
