import React from 'react'
import PropTypes from 'prop-types'
import { Container, H1, P, Button, Br } from 'components'


const HomeScreen = ({ navigator }) => {

  const handleOpenScreenA = () => navigator.push({
    screen: 'app.NestedScreenA',
    title: 'Nested Screen A',
  })

  return (
    <Container>
      <H1>Home Screen</H1>
      <P>This is an example screen that is not connected to redux-store.</P>
      <P>With Wix React Native Navigation it is easy to make native transitions between screens.</P>
      <Button onPress={handleOpenScreenA}>Open Nested Screen A</Button>
    </Container>
  )
}

HomeScreen.propTypes = {
  navigator: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}

export default HomeScreen
