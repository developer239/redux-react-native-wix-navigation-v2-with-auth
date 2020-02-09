import React, { ComponentType } from 'react'
import { Root } from 'native-base'

const withNativeBaseRoot = (WrappedComponent: ComponentType) => (props: any) => (
  <Root>
    <WrappedComponent {...props} />
  </Root>
)

export default withNativeBaseRoot
