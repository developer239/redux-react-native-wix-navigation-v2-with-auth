import React from 'react'
import { compose, lifecycle } from 'recompose'
import { AsyncStorage } from 'react-native'
import { Flex, Spinner } from '../../components'
import { goToAuthScreen, goToHomeScreen } from '../../navigation'
import { USER_KEY } from '../../config'

const InitialisingScreen = () => (
  <Flex center>
    <Spinner />
  </Flex>
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
  }),
)

export default enhance(InitialisingScreen)
