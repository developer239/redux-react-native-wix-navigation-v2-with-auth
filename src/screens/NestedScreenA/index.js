import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Flex, Button } from '../../components'
import { H1 } from '../../components/Text'

const NestedScreenA = ({ componentId }) => {

  return (
    <Flex>
      <H1>Nested Screen B</H1>
      <Button
        onPress={() => Navigation.pop(componentId)}
      >
        Go Back
      </Button>
    </Flex>
  )
}

export const NESTED_A_SCREEN = {
  name: 'app.NestedA',
  title: 'Nested Screen A',
}

NestedScreenA.options = () => ({
  topBar: {
    title: {
      text: NESTED_A_SCREEN.title,
    },
  },
})

export default NestedScreenA
