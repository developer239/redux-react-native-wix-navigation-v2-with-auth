import React from 'react'
import PropTypes from 'prop-types'
import { Container, H1, P, Br, Button } from 'components'


const HomeScreen = ({ navigator }) => {

  const handleOpenScreenB = () => navigator.push({
    screen: 'app.NestedScreenB',
    title: 'Nested Screen B',
  })

  return (
    <Container>
      <H1>Screen A</H1>
      <P>
        This is the first nested screen. Button that allows you to go back to previous screen was
        set automatically.
      </P>
      <P>But you can go even deeper!</P>
      <Button onPress={handleOpenScreenB}>Open Nested Screen B</Button>
    </Container>
  )
}

HomeScreen.propTypes = {
  navigator: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}

export default HomeScreen
