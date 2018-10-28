import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Flex, Button } from '../../components'
import { H1 } from '../../components/Text'

const NestedScreenB = ({ componentId }) => {

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

export const NESTED_B_SCREEN = {
  name: 'app.NestedB',
  title: 'Nested Screen B',
}

NestedScreenB.options = () => ({
  topBar: {
    title: {
      text: NESTED_B_SCREEN.title,
    },
  },
})

export default NestedScreenB
