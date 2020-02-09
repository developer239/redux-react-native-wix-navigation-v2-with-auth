import React from 'react'
import { Navigation } from 'react-native-navigation'
import { Home, HOME_SCREEN_NAV } from 'screens/Home'
import { registerScreen } from 'services/navigation'

Navigation.registerComponent('navigation.HomeScreen', () => Home)

export const registerScreens = () => {
  registerScreen(HOME_SCREEN_NAV.name, Home)
}
