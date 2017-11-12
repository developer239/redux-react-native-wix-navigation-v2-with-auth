import React from 'react'
import { Alert } from 'react-native'
import PropTypes from 'prop-types'
import { Container, H1, P, Button } from 'components'
import { compose, withState, withHandlers, lifecycle } from 'recompose'


const HomeScreen = ({ navigator, isAlertButton, showAlertButton, hideAlertButton }) => {
  const handlePopToRoot = () => navigator.popToRoot()

  const handleHideAlertButton = () => {
    navigator.setButtons({
      rightButtons: [],
      animated: true,
    })
    hideAlertButton()
  }

  const handleShowAlertButton = () => {
    navigator.setButtons({
      rightButtons: [
        {
          title: 'Alert',
          id: 'nestedScreenBAlertButton',
        },
      ],
      animated: true,
    })
    showAlertButton()
  }

  return (
    <Container>
      <H1>Screen B</H1>
      <P>
        This is the end of the road. You can press the top right button to get to the previous
        screen.
      </P>
      <P> On IOS you can also swipe from left to right in order close this screen.</P>
      <P>If you want to go directly to the Home screen then press the button bellow.</P>
      <Button onPress={handlePopToRoot}>Pop</Button>
      <P>
        You can do all sorts of magic with Wix navigation. You can for example dynamically set
        navigation buttons.
      </P>
      {isAlertButton ?
        <Button onPress={handleHideAlertButton}>HIDE Top Right Button</Button> :
        <Button onPress={handleShowAlertButton}>SHOW Top Right Button</Button>
      }
    </Container>
  )
}

HomeScreen.propTypes = {
  navigator: PropTypes.shape({
    popToRoot: PropTypes.func,
  }).isRequired,
  isAlertButton: PropTypes.bool.isRequired,
  showAlertButton: PropTypes.func.isRequired,
  hideAlertButton: PropTypes.func.isRequired,
}

const enhance = compose(
  withState('isAlertButton', 'setIsAlertButton', false),
  withHandlers({
    showAlertButton: ({ setIsAlertButton }) => () => setIsAlertButton(true),
    hideAlertButton: ({ setIsAlertButton }) => () => setIsAlertButton(false),
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

export default enhance(HomeScreen)
