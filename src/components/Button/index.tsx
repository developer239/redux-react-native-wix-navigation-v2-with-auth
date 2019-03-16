import React, { FunctionComponent } from 'react'
import { NativeBase, Text } from 'native-base'
import { StyledButton } from './styled'

const ButtonComponent: FunctionComponent<NativeBase.Button> = ({ children, ...props }) =>
  <StyledButton {...props}><Text>{children}</Text></StyledButton>

export default ButtonComponent
