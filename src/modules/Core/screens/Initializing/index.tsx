import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Alert } from 'react-native'
import { Container, Spinner } from '../../../../components'
import { goToAuthScreen, goToHomeScreen } from '../../../../navigation'
import { USER_KEY } from '../../../../config'

export const INITIALIZING_SCREEN = {
  name: 'app.Initializing',
}

export const InitializingScreen = () => {
  const initializeApp = async () => {
    const user = await AsyncStorage.getItem(USER_KEY)
    if (user) {
      await goToHomeScreen()
    } else {
      await goToAuthScreen()
    }
  }

  useEffect(() => {
    initializeApp().catch(error =>
      Alert.alert('error', `Couldn't initialize app: ${error}`)
    )
  }, [])

  return (
    <Container isCenter>
      <Spinner />
    </Container>
  )
}
