import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const StyledTextInput = styled.TextInput`
  font-size: 18px;
  margin-bottom: 10px;
`

const TextInputComponent = ({ placeholder, onChangeText, secureTextEntry }) =>
  <StyledTextInput
    placeholder={placeholder}
    onChangeText={onChangeText}
    autoCapitalize="none"
    secureTextEntry={secureTextEntry}
  />

TextInputComponent.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
}

export default TextInputComponent
