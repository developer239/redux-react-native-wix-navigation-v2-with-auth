import React from 'react'
import { Navigation } from 'react-native-navigation'
import styled from 'styled-components'
import { NESTED_B_SCREEN } from '../NestedScreenB'
import { Button, Spacing } from '../../components'
import { H1, Text } from '../../components/Text'

const StyledH1 = styled(H1)`
  margin-bottom: 15px;
`

const StyledText = styled(Text)`
  margin-bottom: 15px;
`

const NestedScreenA = ({ componentId }) => {
  const handleOpenNestedScreenBPress = () => Navigation.push(componentId, {
    component: {
      name: NESTED_B_SCREEN.name,
    },
  })

  return (
    <Spacing marginHorizontal={20} marginVertical={20}>
      <StyledH1>
        Screen A
      </StyledH1>
      <StyledText>
        This is the first nested screen. Button that allows you to go back to previous screen was
        set automatically.
      </StyledText>
      <StyledText>
        But you can go even deeper!
      </StyledText>
      <Button
        onPress={handleOpenNestedScreenBPress}
      >
        Dig  Deeper
      </Button>
    </Spacing>
  )
}

export const NESTED_A_SCREEN = {
  name: 'app.NestedA',
  title: 'Screen A',
}

NestedScreenA.options = () => ({
  topBar: {
    title: {
      text: NESTED_A_SCREEN.title,
    },
  },
})

export default NestedScreenA
