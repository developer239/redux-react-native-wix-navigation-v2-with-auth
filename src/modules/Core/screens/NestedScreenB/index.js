import React from 'react'
import PropTypes from 'prop-types'
import { Alert } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { compose, withState, lifecycle } from 'recompose'
import { Button, Container } from '../../../../components'
import { H1, P } from '../../../../components/Text'

export const NESTED_B_SCREEN = {
  name: 'app.NestedB',
  title: 'Screen B',
}

const NestedScreenB = ({
  componentId,
  isTopRightButton,
  setIsTopRightButton,
}) => {
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

const enhance = compose(
  withState('isTopRightButton', 'setIsTopRightButton', false),
  lifecycle({
    componentDidMount() {
      this.navigationButtonPressed = ({ buttonId }) => {
        if (buttonId === `${NESTED_B_SCREEN.name}.alertButton`) {
          Alert.alert('Yay it works!')
        }
      }
      Navigation.events().bindComponent(this)
    },
  })
)

NestedScreenB.propTypes = {
  componentId: PropTypes.string.isRequired,
  isTopRightButton: PropTypes.bool.isRequired,
  setIsTopRightButton: PropTypes.func.isRequired,
}

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
