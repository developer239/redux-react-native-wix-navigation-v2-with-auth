import React from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import { Container, H1, P, Button } from 'components'
import { compose, withState, withHandlers, lifecycle } from 'recompose'


export const NESTED_SCREEN_B = {
  screen: 'app.NestedScreenB',
  title: 'Nested Screen B',
}

const NestedScreenB = ({
  handlePopToRoot,
  shouldShowAlertButton,
  handleShowAlertButton,
  handleHideAlertButton,
}) => (
  <Container>
    <H1>Screen B</H1>
    <P>
      This is the end of the road. You can press the top left button to get to the previous
      screen.
    </P>
    <P> On IOS you can also swipe from left to right in order close this screen.</P>
    <P>If you want to go directly to the home screen then press the button bellow.</P>
    <Button onPress={handlePopToRoot}>Pop</Button>
    <P>
      You can do some cool magic with Wix navigation. You can for example dynamically set
      navigation buttons.
    </P>
    {shouldShowAlertButton ?
      <Button onPress={handleHideAlertButton}>HIDE Top Right Button</Button> :
      <Button onPress={handleShowAlertButton}>SHOW Top Right Button</Button>
    }
  </Container>
)

NestedScreenB.propTypes = {
  navigator: PropTypes.shape({ // eslint-disable-line
    popToRoot: PropTypes.func,
  }).isRequired,
  shouldShowAlertButton: PropTypes.bool.isRequired,
  handleShowAlertButton: PropTypes.func.isRequired,
  handleHideAlertButton: PropTypes.func.isRequired,
  handlePopToRoot: PropTypes.func.isRequired,
}

const enhance = compose(
  withState('shouldShowAlertButton', 'setShouldShowAlertButton', false),
  withHandlers({
    handleShowAlertButton: ({ setShouldShowAlertButton, navigator }) => () => {
      navigator.setButtons({
        rightButtons: [
          {
            title: 'Alert',
            id: 'nestedScreenBAlertButton',
          },
        ],
        animated: true,
      })
      setShouldShowAlertButton(true)
    },
    handleHideAlertButton: ({ setShouldShowAlertButton, navigator }) => () => {
      navigator.setButtons({
        rightButtons: [],
        animated: true,
      })
      setShouldShowAlertButton(false)
    },
    handlePopToRoot: ({ navigator }) => () => navigator.popToRoot(),
  }),
  lifecycle({
    componentDidMount() {
      this.props.navigator.setOnNavigatorEvent((event) => {
        if (event.type === 'NavBarButtonPress' && event.id === 'nestedScreenBAlertButton') {
          Alert.alert('Yay it works!')
        }
      })
    },
  }),
)

export default enhance(NestedScreenB)
