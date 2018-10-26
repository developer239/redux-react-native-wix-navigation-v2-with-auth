import React from 'react'
import {
  View,
  Text,
  StyleSheet,
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
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
