import React from 'react'
import { Container } from '../../components'
import { H1, Text } from '../../components/Text'

const CounterScreen = () => (
  <Container marginHorizontal={20} marginVertical={20}>
    <H1>Counter</H1>
    <Text>
      Lorem Ipsum.
    </Text>
  </Container>
)

export const COUNTER_SCREEN = {
  name: 'app.Counter',
  title: 'Counter',
}

CounterScreen.options = () => ({
  topBar: {
    title: {
      text: COUNTER_SCREEN.title,
    },
  },
})

export default CounterScreen
