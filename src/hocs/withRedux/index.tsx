import React, { ComponentType } from 'react'
import { Provider } from 'react-redux'
import store from '../../store'

const withRedux = (WrappedComponent: ComponentType) => (props: any) => (
  <Provider store={store}>
    <WrappedComponent {...props} />
  </Provider>
)

export default withRedux
