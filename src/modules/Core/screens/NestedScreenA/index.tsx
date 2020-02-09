import React, { FunctionComponent } from 'react'
import { Navigation } from 'react-native-navigation'
import { Button, Container } from '../../../../components'
import { H1, Paragraph } from '../../../../components/Text'
import { NESTED_B_SCREEN } from '../NestedScreenB'
import { IProps } from './types'

export const NESTED_A_SCREEN = {
  name: 'app.NestedA',
  title: 'Screen A',
}

export const NestedScreenA: FunctionComponent<IProps> = ({ componentId }) => {
  const handleOpenNestedScreenBPress = () =>
    Navigation.push(componentId, {
      component: {
        name: NESTED_B_SCREEN.name,
      },
    })

  return (
    <Container marginHorizontal={20} marginVertical={20}>
      <H1>Screen A</H1>
      <Paragraph>
        You are on the first nested screen. Use the top right button if you want
        to go back.
      </Paragraph>
      <Paragraph>But you can go even further!</Paragraph>
      <Button onPress={handleOpenNestedScreenBPress}>Go Further</Button>
    </Container>
  )
}

// TODO: https://github.com/mridgway/hoist-non-react-statics
// @ts-ignore
NestedScreenA.options = () => ({
  topBar: {
    title: {
      text: NESTED_A_SCREEN.title,
    },
  },
})
