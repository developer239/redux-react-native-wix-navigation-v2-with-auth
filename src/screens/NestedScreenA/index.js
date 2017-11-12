import React from 'react'
import PropTypes from 'prop-types'
import { Container, H1, P, Button } from 'components'
import { NESTED_SCREEN_B } from 'screens/NestedScreenB'


export const NESTED_SCREEN_A = {
  screen: 'app.NestedScreenA',
  title: 'Nested Screen A',
}

const NestedScreenA = ({ navigator }) => {
  const handleOpenScreenB = () => navigator.push(NESTED_SCREEN_B)

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

NestedScreenA.propTypes = {
  navigator: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}

export default NestedScreenA
