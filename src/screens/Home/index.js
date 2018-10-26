import React from 'react'
import {
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native'
import { Navigation } from 'react-native-navigation'
import { goToAuthScreen } from '../../navigation'
import { USER_KEY } from '../../config'

export default class HomeScreen extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Home',
        },
      },
    }
  }

  logout = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY)
      goToAuthScreen()
    } catch (err) {
      console.log('error signing out...: ', err)
    }
  }

  render() {
    console.log('props; ', this.props)
    return (
      <View>
        <Text>Hello from Home screen.</Text>
        <Button
          onPress={this.logout}
          title="Sign Out"
        />
        <Button
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'Screen2',
              },
            })
          }}
          title="View next screen"
        />
      </View>
    )
  }
}
