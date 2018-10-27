import React from 'react'
import {
  AsyncStorage,
} from 'react-native'
import { Flex, Spacing } from '../../components'
import { H1 } from '../../components/Text'
import SignInForm from '../../forms/SignIn'
import { goToHomeScreen } from '../../navigation'
import { USER_KEY } from '../../config'

const SignInScreen = () => {
  const handleSignIn = async ({ username, password }) => {
    if (password === 'Password1234') {
      await Promise.all([
        AsyncStorage.setItem(USER_KEY, username),
      ])
      goToHomeScreen()
    } else {
      // display toast and clear form
    }
  }

  return (
    <Spacing marginHorizontal={20}>
      <Flex center>
        <H1>Sign In</H1>
        <SignInForm />
      </Flex>
    </Spacing>
  )
}

SignInScreen.options = () => ({
  topBar: {
    visible: false,
  }
})

export default SignInScreen
