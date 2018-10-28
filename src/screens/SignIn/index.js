import React from 'react'
import {
  AsyncStorage,
} from 'react-native'
import { Root, Toast } from 'native-base'
import wait from '../../services/wait'
import { Flex, Spacing } from '../../components'
import { H1 } from '../../components/Text'
import SignInForm from '../../forms/SignIn'
import { goToHomeScreen } from '../../navigation'
import { USER_KEY } from '../../config'

const SignInScreen = () => {
  const handleSubmit = async ({ email, password }, { resetForm }) => {
    // Fake response from server
    await wait(1000)

    if (password !== 'password') {
      resetForm()
      return Toast.show({
        text: 'Wrong password!',
        type: 'danger',
        position: 'top',
      })
    }

    await AsyncStorage.setItem(USER_KEY, email)
    goToHomeScreen()
  }

  return (
    <Root>
      <Spacing marginHorizontal={20}>
        <Flex center>
          <H1>Sign In</H1>
          <SignInForm onSubmit={handleSubmit} />
        </Flex>
      </Spacing>
    </Root>
  )
}

export const SIGN_IN_SCREEN = {
  name: 'app.SignIn',
}

SignInScreen.options = () => ({
  topBar: {
    visible: false,
  },
})

export default SignInScreen
