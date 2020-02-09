import React, { FunctionComponent, useState } from 'react'
import { Alert } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Button, Container } from '../../../../components'
import { H1, Paragraph } from '../../../../components/Text'
import { useButtonListener } from '../../../../hooks/useButtonListener'
import { IProps } from './types'

export const NESTED_B_SCREEN = {
  name: 'app.NestedB',
  title: 'Screen B',
}

export const ALERT_BUTTON = {
  id: `${NESTED_B_SCREEN.name}.alertButton`,
  text: 'Alert!',
}

export const NestedScreenB: FunctionComponent<IProps> = ({ componentId }) => {
  const [isTopRightButton, setIsTopRightButton] = useState(false)
  useButtonListener(({ buttonId }) => {
    if (buttonId === ALERT_BUTTON.id) {
      Alert.alert('Yay it works!')
    }
  })

  const handlePopPress = () => Navigation.popToRoot(componentId)

  const handleShowAlertButton = () => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        rightButtons: [ALERT_BUTTON],
      },
    })
    setIsTopRightButton(true)
  }

  const handleHideAlertButton = () => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        rightButtons: [],
      },
    })
    setIsTopRightButton(false)
  }

  return (
    <Container marginHorizontal={20} marginVertical={20}>
      <H1>Screen B</H1>
      <Paragraph>
        You hit the end of the road. You can press the top left button to get to
        the previous screen.
      </Paragraph>
      <Paragraph>
        On IOS you can also swipe from left to right to close this screen.
      </Paragraph>
      <Paragraph>
        Press the button below to go directly to the home screen.
      </Paragraph>
      <Button onPress={handlePopPress}>Pop</Button>
      <Paragraph>
        Wix Navigation could be hard to understand at first, but it allows you
        to do many different things. For example, dynamically set navigation
        buttons.
      </Paragraph>
      {isTopRightButton ? (
        <Button onPress={handleHideAlertButton}>HIDE Top Right Button</Button>
      ) : (
        <Button onPress={handleShowAlertButton}>SHOW Top Right Button</Button>
      )}
    </Container>
  )
}

// TODO: https://github.com/mridgway/hoist-non-react-statics
// @ts-ignore
NestedScreenB.options = () => ({
  topBar: {
    title: {
      text: NESTED_B_SCREEN.title,
    },
  },
})
