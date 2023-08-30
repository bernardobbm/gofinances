/* eslint-disable camelcase */
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

import { AppRoutes } from './src/routes/app.routes'
import theme from './src/global/styles/theme'

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
      <NavigationContainer onReady={onLayoutRootView}>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}
