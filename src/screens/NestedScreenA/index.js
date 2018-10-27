import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Flex, Button } from '../../components'
import { H1 } from '../../components/Text'

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
      <Flex>
        <H1>Nested Screen A</H1>
        <Button
          onPress={() => Navigation.pop(this.props.componentId)}
          title="Go Back"
        />
      </Flex>
    )
  }
}
