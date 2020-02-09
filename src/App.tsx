import React from 'react'
import { Navigation } from 'react-native-navigation'
import { registerScreens } from 'navigation'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.HomeScreen',
      },
    },
  })
})
