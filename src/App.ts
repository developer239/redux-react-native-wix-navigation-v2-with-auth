import { Navigation } from 'react-native-navigation'
import { registerScreens } from './navigation'
import { INITIALIZING_SCREEN } from './modules/Core/screens/Initializing'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: INITIALIZING_SCREEN.name,
      },
    },
  })
})
