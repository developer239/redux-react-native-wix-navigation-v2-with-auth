import React, { FunctionComponent } from 'react'
import { NativeBase, Text } from 'native-base'
import { StyledButton } from './styled'

export const Button: FunctionComponent<NativeBase.Button> = ({
  children,
  ...props
}) => (
  <StyledButton {...props}>
    <Text>{children}</Text>
  </StyledButton>
)
