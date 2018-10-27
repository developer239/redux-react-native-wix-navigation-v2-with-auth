import React from 'react'
import {
  AsyncStorage,
} from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Button, Flex } from '../../components'
import { H1 } from '../../components/Text'
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
      <Flex>
        <H1>Home Screen</H1>
        <Button
          onPress={this.logout}
          title="Log Out"
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
      </Flex>
    )
  }
}
