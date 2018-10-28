import { registerScreen, setRoot } from './services/navigation'
import Home, { HOME_SCREEN } from './screens/Home'
import Initializing, { INITIALIZING_SCREEN } from './screens/Initializing'
import NestedScreenA, { NESTED_A_SCREEN } from './screens/NestedScreenA'
import NestedScreenB, { NESTED_B_SCREEN } from './screens/NestedScreenB'
import SignIn, { SIGN_IN_SCREEN } from './screens/SignIn'

export const registerScreens = () => {
  registerScreen(HOME_SCREEN.name, Home)
  registerScreen(INITIALIZING_SCREEN.name, Initializing)
  registerScreen(SIGN_IN_SCREEN.name, SignIn)
  registerScreen(NESTED_A_SCREEN.name, NestedScreenA)
  registerScreen(NESTED_B_SCREEN.name, NestedScreenB)
}

export const goToAuthScreen = () => setRoot('stack', 'SignIn', [
  {
    component: {
      name: SIGN_IN_SCREEN.name,
    },
  },
])

export const goToHomeScreen = () => setRoot('stack', 'App', [
  {
    component: {
      name: HOME_SCREEN.name,
    },
  },
])
