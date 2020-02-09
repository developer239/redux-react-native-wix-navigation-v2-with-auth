/* eslint-disable @typescript-eslint/no-require-imports */
import { registerScreen, setRoot } from './services/navigation'
import { HomeScreen, HOME_SCREEN } from './modules/Core/screens/Home'
import {
  InitializingScreen,
  INITIALIZING_SCREEN,
} from './modules/Core/screens/Initializing'
import {
  NestedScreenA,
  NESTED_A_SCREEN,
} from './modules/Core/screens/NestedScreenA'
import {
  NestedScreenB,
  NESTED_B_SCREEN,
} from './modules/Core/screens/NestedScreenB'
import { SignInScreen, SIGN_IN_SCREEN } from './modules/Core/screens/SignIn'

export const registerScreens = () => {
  registerScreen(HOME_SCREEN.name, HomeScreen)
  registerScreen(INITIALIZING_SCREEN.name, InitializingScreen)
  registerScreen(SIGN_IN_SCREEN.name, SignInScreen)
  registerScreen(NESTED_A_SCREEN.name, NestedScreenA)
  registerScreen(NESTED_B_SCREEN.name, NestedScreenB)
}

export const goToAuthScreen = () =>
  setRoot('stack', 'SignIn', [
    {
      component: {
        name: SIGN_IN_SCREEN.name,
      },
    },
  ])

export const goToHomeScreen = () =>
  setRoot('bottomTabs', 'App', [
    {
      stack: {
        children: [
          {
            component: {
              name: HOME_SCREEN.name,
              options: {
                bottomTab: {
                  fontSize: 14,
                  text: 'Home',
                  icon: require('./static/images/home.png'),
                },
              },
            },
          },
        ],
      },
    },
  ])
