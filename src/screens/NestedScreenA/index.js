import React from 'react'
import PropTypes from 'prop-types'
import {
  Container, H1, P, Button,
} from 'components'
import { compose, withHandlers } from 'recompose'
import { NESTED_SCREEN_B } from 'screens/NestedScreenB'


export const NESTED_SCREEN_A = {
  screen: 'app.NestedScreenA',
  title: 'Nested Screen A',
}

export const NestedScreenA = ({ handleOpenScreenB }) => (
  <Container>
    <H1>
      Screen A
    </H1>
    <P>
      This is the first nested screen. Button that allows you to go back to previous screen was
      set automatically.
    </P>
    <P>
      But you can go even deeper!
    </P>
    <Button onPress={handleOpenScreenB}>
      Open Nested Screen B
    </Button>
  </Container>
)

NestedScreenA.propTypes = {
  navigator: PropTypes.shape({ // eslint-disable-line
    push: PropTypes.func,
  }),
  handleOpenScreenB: PropTypes.func,
}

const enhance = compose(
  withHandlers({
    handleOpenScreenB: ({ navigator }) => () => navigator.push(NESTED_SCREEN_B),
  }),
)

export default enhance(NestedScreenA)
