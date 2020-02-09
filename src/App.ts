import { Navigation } from 'react-native-navigation'
import { registerScreens } from './navigation'
import { INITIALIZING_SCREEN } from './modules/Core/screens/Initializing'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  Navigation.setRoot({
    root: {
      component: {
        name: INITIALIZING_SCREEN.name,
      },
    },
  })
})
