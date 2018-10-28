import React from 'react'
import { Navigation } from 'react-native-navigation'
import { NESTED_B_SCREEN } from '../NestedScreenB'
import { Button, Container } from '../../components'
import { H1, Text } from '../../components/Text'

const NestedScreenA = ({ componentId }) => {
  const handleOpenNestedScreenBPress = () => Navigation.push(componentId, {
    component: {
      name: NESTED_B_SCREEN.name,
    },
  })

  return (
    <Container marginHorizontal={20} marginVertical={20}>
      <H1>
        Screen A
      </H1>
      <Text>
        This is the first nested screen. Button that allows you to go back to previous screen was
        set automatically.
      </Text>
      <Text>
        But you can go even deeper!
      </Text>
      <Button
        onPress={handleOpenNestedScreenBPress}
      >
        Dig  Deeper
      </Button>
    </Container>
  )
}

export const NESTED_A_SCREEN = {
  name: 'app.NestedA',
  title: 'Screen A',
}

NestedScreenA.options = () => ({
  topBar: {
    title: {
      text: NESTED_A_SCREEN.title,
    },
  },
})

export default NestedScreenA
