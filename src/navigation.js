import * as Screens from './screens'
import { registerScreen, setRoot } from './services/navigation'

export const registerScreens = () => {
  registerScreen('Home', Screens.Home)
  registerScreen('Initializing', Screens.Initializing)
  registerScreen('SignIn', Screens.SignIn)
  registerScreen('Screen2', Screens.NestedScreenA)
}

export const goToAuthScreen = () => setRoot('stack', 'SignIn', [
  {
    component: {
      name: 'SignIn',
    },
  },
])

export const goToHomeScreen = () => setRoot('stack', 'App', [
  {
    component: {
      name: 'Home',
    },
  },
])
