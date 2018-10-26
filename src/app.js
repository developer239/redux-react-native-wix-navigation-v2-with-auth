import { Navigation } from 'react-native-navigation'
import { registerScreens } from './navigation'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing',
      },
    },
  })
})
