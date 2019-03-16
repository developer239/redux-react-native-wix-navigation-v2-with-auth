import React from 'react'
import { Root } from 'native-base'

const withNativeBaseRoot = WrappedComponent => props => (
  <Root>
    <WrappedComponent {...props} />
  </Root>
)

export default withNativeBaseRoot
