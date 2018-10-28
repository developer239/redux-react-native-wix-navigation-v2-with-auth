import React from 'react'
import { Alert } from 'react-native'
import { Navigation } from 'react-native-navigation'
import styled from 'styled-components'
import {
  compose,
  withState,
  lifecycle,
} from 'recompose'
import { Button, Spacing } from '../../components'
import { H1, Text } from '../../components/Text'

const StyledH1 = styled(H1)`
  margin-bottom: 15px;
`

const StyledText = styled(Text)`
  margin-bottom: 15px;
`

const StyledButton = styled(Button)`
  margin-bottom: 15px;
`

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
    <Spacing marginHorizontal={20} marginVertical={20}>
      <StyledH1>Screen B</StyledH1>
      <StyledText>
        This is the end of the road. You can press the top left button to get to the previous
        screen.
      </StyledText>
      <StyledText>
        {' '}
        On IOS you can also swipe from left to right in order close this screen.
      </StyledText>
      <StyledText>
        If you want to go directly to the home screen then press the button bellow.
      </StyledText>
      <StyledButton onPress={handlePopPress}>
        Pop
      </StyledButton>
      <StyledText>
        You can do some cool magic with Wix navigation. You can for example dynamically set
        navigation buttons.
      </StyledText>
      {isTopRightButton
        ? <Button onPress={handleHideAlertButton}>HIDE Top Right Button</Button>
        : <Button onPress={handleShowAlertButton}>SHOW Top Right Button</Button>
      }
    </Spacing>
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

EnhancedNestedScreenB.options = () => ({
  topBar: {
    title: {
      text: NESTED_B_SCREEN.title,
    },
  },
})

export default EnhancedNestedScreenB
