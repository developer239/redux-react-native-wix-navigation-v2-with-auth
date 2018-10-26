import { Navigation } from 'react-native-navigation'
import * as Screens from './screens'

export const registerScreens = () => {
  Navigation.registerComponent('Home', () => Screens.Home)
  Navigation.registerComponent('Initializing', () => Screens.Initializing)
  Navigation.registerComponent('SignIn', () => Screens.SignIn)
  Navigation.registerComponent('Screen2', () => Screens.NestedScreenA)
}

export const goToAuth = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'SignIn',
      children: [
        {
          component: {
            name: 'SignIn',
          },
        },
      ],
    }
  }
});

export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'Home',
          }
        }
    ],
    }
  }
})
