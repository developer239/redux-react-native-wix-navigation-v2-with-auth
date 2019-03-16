import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Navigation } from 'react-native-navigation'
import { USER_KEY } from '../../../../config'
import { Button, Container } from '../../../../components'
import { H1, P } from '../../../../components/Text'
import { goToAuthScreen } from '../../../../navigation'
import { NESTED_A_SCREEN } from '../NestedScreenA'

const HomeScreen = ({ componentId }) => {
  const handleLogOut = async () => {
    await AsyncStorage.removeItem(USER_KEY)
    goToAuthScreen()
  }

  const handleOpenNestedScreenAPress = () =>
    Navigation.push(componentId, {
      component: {
        name: NESTED_A_SCREEN.name,
      },
    })

  return (
    <Container marginHorizontal={20} marginVertical={20}>
      <H1>Home Screen</H1>
      <P>
        With React Native Navigation it is easy to make native transitions
        between screens.
      </P>
      <Button onPress={handleOpenNestedScreenAPress} block>
        Open Nested Screen A
      </Button>
      <P>
        You will be signed in until you sign out. Press the button below if you
        want to change user profile.
      </P>
      <Button onPress={handleLogOut}>Sign Out</Button>
    </Container>
  )
}

export const HOME_SCREEN = {
  name: 'app.Home',
  title: 'Home',
}

HomeScreen.options = () => ({
  topBar: {
    title: {
      text: HOME_SCREEN.title,
    },
  },
})

export default HomeScreen
