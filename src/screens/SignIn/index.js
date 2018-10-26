import React from 'react'
import {
  AsyncStorage,
} from 'react-native'
import { Container, Button, TextInput, H1 } from '../../components'
import { goToHomeScreen } from '../../navigation'
import { USER_KEY } from '../../config'

export default class SignInScreen extends React.Component {
  state = {
    username: '', password: '',
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
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
      <Container>
        <H1>Log In Screen</H1>
        <TextInput
          placeholder="Username"
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          onPress={this.signIn}
          title="Sign In"
        />
      </Container>
    )
  }
}
