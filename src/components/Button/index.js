import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { THEME } from 'config'


const ButtonContainer = styled.TouchableOpacity`
  background-color: ${THEME.primary};
  padding: 10px 5px;
  margin: 10px 0;
`

const ButtonText = styled.Text`
  color: ${THEME.textOnPrimary};
  font-weight: 500;
  text-align: center;
`

const Button = ({ children, onPress }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{children}</ButtonText>
  </ButtonContainer>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
}

export default Button
