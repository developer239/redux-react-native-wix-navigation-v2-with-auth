import React from 'react'
import PropTypes from 'prop-types'
import { Navigation } from 'react-native-navigation'
import { NESTED_B_SCREEN } from '../NestedScreenB'
import { Button, Container } from '../../components'
import { H1, P } from '../../components/Text'

const NestedScreenA = ({ componentId }) => {
  const handleOpenNestedScreenBPress = () => Navigation.push(componentId, {
    component: {
      name: NESTED_B_SCREEN.name,
    },
  })

  return (
    <Container marginHorizontal={20} marginVertical={20}>
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
      <Button
        onPress={handleOpenNestedScreenBPress}
      >
        Dig Deeper
      </Button>
    </Container>
  )
}

export const NESTED_A_SCREEN = {
  name: 'app.NestedA',
  title: 'Screen A',
}

NestedScreenA.propTypes = {
  componentId: PropTypes.string.isRequired,
}

NestedScreenA.options = () => ({
  topBar: {
    title: {
      text: NESTED_A_SCREEN.title,
    },
  },
})

export default NestedScreenA
