import React, { useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { Container, Spinner } from '../../../../components'
import { goToAuthScreen, goToHomeScreen } from '../../../../navigation'
import { USER_KEY } from '../../../../config'

export const INITIALIZING_SCREEN = {
  name: 'app.Initializing',
}

const InitialisingScreen = () => {
  const initializeApp = async () => {
    const user = await AsyncStorage.getItem(USER_KEY)
    if (user) {
      await goToHomeScreen()
    } else {
      await goToAuthScreen()
    }
  }

  useEffect(() => {
    initializeApp()
  }, [])

  return (
    <Container isCenter>
      <Spinner />
    </Container>
  )
}

export default InitialisingScreen
