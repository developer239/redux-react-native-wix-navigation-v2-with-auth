import React, { ComponentType } from 'react'
import { Root } from 'native-base'

export const withNativeBaseRoot = (WrappedComponent: ComponentType) => (
  props: any
) => (
  <Root>
    <WrappedComponent {...props} />
  </Root>
)
