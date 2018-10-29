import React from 'react'
import PropTypes from 'prop-types'
import {
  AsyncStorage,
} from 'react-native'
import { Navigation } from 'react-native-navigation'
import { USER_KEY } from '../../config'
import { NESTED_A_SCREEN } from '../NestedScreenA'
import { Button, Container } from '../../components'
import { H1, P } from '../../components/Text'
import { goToAuthScreen } from '../../navigation'

const HomeScreen = ({ componentId }) => {
  const handleLogOut = async () => {
    await AsyncStorage.removeItem(USER_KEY)
    goToAuthScreen()
  }

  const handleOpenNestedScreenAPress = () => Navigation.push(componentId, {
    component: {
      name: NESTED_A_SCREEN.name,
    },
  })

  return (
    <Container marginHorizontal={20} marginVertical={20}>
      <H1>Home Screen</H1>
      <P>
        With React Native Navigation it is easy to make native transitions between
        screens.
      </P>
      <Button
        onPress={handleOpenNestedScreenAPress}
        block
      >
        Open Nested Screen A
      </Button>
      <P>
        If you refresh the application or if you minimize it and then open it again you will
        be signed in. Press the sign out button if you want to sign in as a different
        user.
      </P>
      <Button
        onPress={handleLogOut}
      >
        Sign Out
      </Button>
    </Container>
  )
}

export const HOME_SCREEN = {
  name: 'app.Home',
  title: 'Home',
}

HomeScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
}

HomeScreen.options = () => ({
  topBar: {
    title: {
      text: HOME_SCREEN.title,
    },
  },
})

export default HomeScreen
