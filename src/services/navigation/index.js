import { Navigation } from 'react-native-navigation'

export const registerScreen = (name, component) =>
  Navigation.registerComponent(name, () => component)

export const setRoot = (type, id, children) => Navigation.setRoot({
  root: {
    [type]: {
      id,
      children,
    },
  },
})
