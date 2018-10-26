import React from 'react'
import {
  View,
  Text,
  AsyncStorage,
} from 'react-native'
import { goToAuthScreen, goToHomeScreen } from '../../navigation'
import { USER_KEY } from '../../config'

export default class InitialisingScreen extends React.Component {
  async componentDidMount() {
    const user = await AsyncStorage.getItem(USER_KEY)
    if (user) {
      goToHomeScreen()
    } else {
      goToAuthScreen()
    }
  }

  render() {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
}
