import { ComponentType } from 'react'
import { Layout, Navigation } from 'react-native-navigation'

export const registerScreen = (screenName: string, component: ComponentType<any>) =>
  Navigation.registerComponent(screenName, () => component)

export const setRoot = (type: string, id: string, children: Layout[]) => Navigation.setRoot({
  root: {
    [type]: {
      id,
      children,
    },
  },
})
