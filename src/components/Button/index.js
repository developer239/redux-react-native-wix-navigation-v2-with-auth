import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'


const ButtonContainer = styled.TouchableOpacity`
  background-color: #338a3e;
  padding: 20px 10px;
  margin-top: 20px;
`

const ButtonText = styled.Text`
  color: #FFFFFF;
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
