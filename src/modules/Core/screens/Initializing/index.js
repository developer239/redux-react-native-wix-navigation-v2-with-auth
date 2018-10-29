import React from 'react'
import { compose, lifecycle } from 'recompose'
import { AsyncStorage } from 'react-native'
import { Container, Spinner } from 'components'
import { goToAuthScreen, goToHomeScreen } from 'navigation'
import { USER_KEY } from 'config'

const InitialisingScreen = () => (
  <Container center>
    <Spinner />
  </Container>
)

const enhance = compose(
  lifecycle({
    async componentDidMount() {
      const user = await AsyncStorage.getItem(USER_KEY)
      if (user) {
        goToHomeScreen()
      } else {
        goToAuthScreen()
      }
    },
  })
)

export const INITIALIZING_SCREEN = {
  name: 'app.Initializing',
}

export default enhance(InitialisingScreen)
