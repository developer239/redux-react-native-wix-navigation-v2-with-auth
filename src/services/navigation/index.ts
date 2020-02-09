import { ComponentType } from 'react'
import { Navigation } from 'react-native-navigation'

export const registerScreen = (screenName: string, component: ComponentType<any>) =>
  Navigation.registerComponent(screenName, () => component)
