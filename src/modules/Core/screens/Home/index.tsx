import React, { FunctionComponent } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Navigation } from 'react-native-navigation'
import { Toast } from 'native-base'
import { USER_KEY } from '../../../../config'
import { Button, Container } from '../../../../components'
import { H1, Paragraph } from '../../../../components/Text'
import { goToAuthScreen } from '../../../../navigation'
import { NESTED_A_SCREEN } from '../NestedScreenA'
import { IProps } from './types'

export const HOME_SCREEN = {
  name: 'app.Home',
  title: 'Home',
}

export const HomeScreen: FunctionComponent<IProps> = ({ componentId }) => {
  const handleLogOut = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY)
      await goToAuthScreen()
    } catch (error) {
      Toast.show({
        text: 'Logout failed!',
        type: 'danger',
        position: 'top',
      })
    }
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
      <Paragraph>
        With React Native Navigation it is easy to make native transitions
        between screens.
      </Paragraph>
      <Button onPress={handleOpenNestedScreenAPress} block>
        Open Nested Screen A
      </Button>
      <Paragraph>
        You will be signed in until you sign out. Press the button below if you
        want to change user profile.
      </Paragraph>
      <Button onPress={handleLogOut}>Sign Out</Button>
    </Container>
  )
}

// TODO: https://github.com/mridgway/hoist-non-react-statics
// @ts-ignore
HomeScreen.options = () => ({
  topBar: {
    title: {
      text: HOME_SCREEN.title,
    },
  },
})
