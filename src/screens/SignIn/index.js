import React from 'react'
import {
  View,
  TextInput,
  Button,
  AsyncStorage,
} from 'react-native'
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
      <View>
        <TextInput
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor="white"
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          title="Sign In"
          onPress={this.signIn}
        />
      </View>
    )
  }
}
