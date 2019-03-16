import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Button, Container } from '../../../../components'
import { H1, P } from '../../../../components/Text'
import { NESTED_B_SCREEN } from '../NestedScreenB'

const NestedScreenA = ({ componentId }) => {
  const handleOpenNestedScreenBPress = () =>
    Navigation.push(componentId, {
      component: {
        name: NESTED_B_SCREEN.name,
      },
    })

  return (
    <Container marginHorizontal={20} marginVertical={20}>
      <H1>Screen A</H1>
      <P>
        You are on the first nested screen. Use the top right button if you want
        to go back.
      </P>
      <P>But you can go even further!</P>
      <Button onPress={handleOpenNestedScreenBPress}>Go Further</Button>
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
