import React, {
  useEffect,
  useState
} from 'react'
import { Alert } from 'react-native'
import { Navigation } from 'react-native-navigation'
import {
  Button,
  Container
} from '../../../../components'
import {
  H1,
  P
} from '../../../../components/Text'

export const NESTED_B_SCREEN = {
  name: 'app.NestedB',
  title: 'Screen B',
}

export const ALERT_BUTTON = {
  id: `${NESTED_B_SCREEN.name}.alertButton`,
  text: 'Alert!'
}

const NestedScreenB = ({
  componentId,
}) => {

  const [isTopRightButton, setIsTopRightButton] = useState(false)

  useEffect(() => {
    Navigation
      .events()
      .registerNavigationButtonPressedListener(({ buttonId }) => {
        if (buttonId === ALERT_BUTTON.id) {
          Alert.alert('Yay it works!')
        }
      })
  }, [])

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
      <P>
        You hit the end of the road. You can press the top left button to get to
        the previous screen.
      </P>
      <P>On IOS you can also swipe from left to right to close this screen.</P>
      <P>Press the button below to go directly to the home screen.</P>
      <Button onPress={handlePopPress}>Pop</Button>
      <P>
        Wix Navigation could be hard to understand at first, but it allows you
        to do many different things. For example, dynamically set navigation
        buttons.
      </P>
      {isTopRightButton ? (
        <Button onPress={handleHideAlertButton}>HIDE Top Right Button</Button>
      ) : (
        <Button onPress={handleShowAlertButton}>SHOW Top Right Button</Button>
      )}
    </Container>
  )
}

// TODO: Move inside component?
NestedScreenB.options = () => ({
  topBar: {
    title: {
      text: NESTED_B_SCREEN.title,
    },
  },
})

export default NestedScreenB
