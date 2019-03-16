import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Toast } from 'native-base'
import wait from '../../../../services/wait'
import { Container } from '../../../../components'
import { H1 } from '../../../../components/Text'
import { withNativeBaseRoot } from '../../../../hocs'
import SignInForm from '../../../../forms/SignIn'
import { goToHomeScreen } from '../../../../navigation'
import { USER_KEY } from '../../../../config'

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
    <Container center marginHorizontal={20}>
      <H1>Sign In</H1>
      <SignInForm onSubmit={handleSubmit} />
    </Container>
  )
}

export const SIGN_IN_SCREEN = {
  name: 'app.SignIn',
}

const EnhancedSignInScreen = withNativeBaseRoot(SignInScreen)

// TODO: Hoist Non React Statics
EnhancedSignInScreen.options = () => ({
  topBar: {
    visible: false,
  },
})

export default EnhancedSignInScreen
