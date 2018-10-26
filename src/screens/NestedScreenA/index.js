import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Container, Button, H1 } from '../../components'

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
      <Container>
        <H1>Nested Screen A</H1>
        <Button
          onPress={() => Navigation.pop(this.props.componentId)}
          title="Go Back"
        />
      </Container>
    )
  }
}
