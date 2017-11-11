import React from 'react'
import PropTypes from 'prop-types'
import { Container, H1, P, Button } from 'components'


const HomeScreen = ({ navigator }) => {

  const handlePopToRoot = () => navigator.popToRoot()

  return (
    <Container>
      <H1>Screen B</H1>
      <P>
        This is the end of the road. You can press the top right button to get to the previous
        screen.</P>
      <P> On IOS you can also swipe from left to right in order close this screen.</P>
      <P>If you want to go directly to the Home screen then press the button bellow.</P>
      <Button onPress={handlePopToRoot}>Pop</Button>
    </Container>
  )
}

HomeScreen.propTypes = {
  navigator: PropTypes.shape({
    popToRoot: PropTypes.func,
  }).isRequired,
}

export default HomeScreen
