import React from 'react'
import { Button } from 'native-base'
import { Text } from '../Text'

const ButtonComponent = ({ children, ...props }) =>
  <Button {...props}><Text>{children}</Text></Button>

export default ButtonComponent
