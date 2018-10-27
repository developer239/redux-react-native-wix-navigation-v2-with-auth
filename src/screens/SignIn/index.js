import React from 'react'
import {
  AsyncStorage,
} from 'react-native'
import { Flex, Spacing } from '../../components'
import { H1 } from '../../components/Text'
import SignInForm from '../../forms/SignIn'
import { goToHomeScreen } from '../../navigation'
import { USER_KEY } from '../../config'

export default class SignInScreen extends React.Component {
  signIn = async () => {
    const { username } = this.state
    try {
      // login with provider
      const user = await AsyncStorage.setItem(USER_KEY, username)
      console.log('user successfully signed in!', user)
      goToHomeScreen()
    } catch (err) {
      console.log('error:', err)
    }
  }

  render() {
    return (
      <Spacing marginHorizontal={20}>
        <Flex center>
          <H1>Sign In</H1>
          <SignInForm />
        </Flex>
      </Spacing>
    )
  }
}
