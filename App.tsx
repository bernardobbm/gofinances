/* eslint-disable camelcase */
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { ThemeProvider } from 'styled-components/native'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'
import { Register } from './src/screens/Register'
// import { Dashboard } from './src/screens/Dashboard'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <Dashboard onLayout={onLayoutRootView} /> */}
      <Register onLayout={onLayoutRootView} />
    </ThemeProvider>
  )
}
