import React from 'react'
import styled from 'styled-components/native'

const Container = styled.TouchableOpacity`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`

const StyledText = styled.Text`
  font-size: 22px;
  font-weight: bold;
`

const LoaderComponent = () => (
  <Container>
    <StyledText>
      Loading...
    </StyledText>
  </Container>
)

export default LoaderComponent
