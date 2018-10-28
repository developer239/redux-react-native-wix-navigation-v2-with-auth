import React from 'react'
import { Alert } from 'react-native'
import { Navigation } from 'react-native-navigation'
import {
  compose,
  withState,
  lifecycle,
} from 'recompose'
import { Button, Container } from '../../components'
import { H1, Text } from '../../components/Text'

const NestedScreenB = ({ componentId, isTopRightButton, setIsTopRightButton }) => {
  const handlePopPress = () => Navigation.popToRoot(componentId)

  const handleShowAlertButton = () => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        rightButtons: [
          {
            id: `${NESTED_B_SCREEN.name}.alertButton`,
            text: 'Alert!',
          },
        ],
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
      <Text>
        This is the end of the road. You can press the top left button to get to the previous
        screen.
      </Text>
      <Text>
        On IOS you can also swipe from left to right in order close this screen.
      </Text>
      <Text>
        If you want to go directly to the home screen then press the button bellow.
      </Text>
      <Button onPress={handlePopPress}>
        Pop
      </Button>
      <Text>
        You can do some cool magic with Wix navigation. You can for example dynamically set
        navigation buttons.
      </Text>
      {isTopRightButton
        ? <Button onPress={handleHideAlertButton}>HIDE Top Right Button</Button>
        : <Button onPress={handleShowAlertButton}>SHOW Top Right Button</Button>
      }
    </Container>
  )
}

export const NESTED_B_SCREEN = {
  name: 'app.NestedB',
  title: 'Screen B',
}

const enhance = compose(
  withState('isTopRightButton', 'setIsTopRightButton', false),
  lifecycle({
    componentDidMount() {
      // This is not too nice but it looks like this is the only way with functional components
      // https://wix.github.io/react-native-navigation/v2/#/docs/topBar-buttons?id=declaring-buttons-dynamically
      this.navigationButtonPressed = ({ buttonId }) => {
        if (buttonId === `${NESTED_B_SCREEN.name}.alertButton`) {
          Alert.alert('Yay it works!')
        }
      }
      Navigation.events().bindComponent(this)
    },
  }),
)

const EnhancedNestedScreenB = enhance(NestedScreenB)

// TODO: Hoist Non React Statics
EnhancedNestedScreenB.options = () => ({
  topBar: {
    title: {
      text: NESTED_B_SCREEN.title,
    },
  },
})

export default EnhancedNestedScreenB
