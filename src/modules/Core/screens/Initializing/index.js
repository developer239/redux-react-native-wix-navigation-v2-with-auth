import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Container, Spinner } from '../../../../components'
import { goToAuthScreen, goToHomeScreen } from '../../../../navigation'
import { USER_KEY } from '../../../../config'

const InitialisingScreen = () => {
  const initializeApp = async () => {
    const user = await AsyncStorage.getItem(USER_KEY)
    if (user) {
      goToHomeScreen()
    } else {
      goToAuthScreen()
    }
  }

  useEffect(() => {
    initializeApp()
  }, []);

  return (
    <Container center>
      <Spinner />
    </Container>
  )
}

export const INITIALIZING_SCREEN = {
  name: 'app.Initializing',
}

export default InitialisingScreen
