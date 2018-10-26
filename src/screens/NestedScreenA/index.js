import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class NestedScreenA extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Nested Screen A',
        },
      },
    }
  }

  render() {
    return (
      <View>
        <Text>Nested Screen A</Text>
        <Button
          onPress={() => Navigation.pop(this.props.componentId)}
          title="Go Back"
        />
      </View>
    )
  }
}
