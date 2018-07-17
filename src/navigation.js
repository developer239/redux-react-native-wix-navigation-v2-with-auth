import { Navigation } from 'react-native-navigation'
import { THEME } from 'config'
import { HOME_SCREEN } from 'screens/Home/index'
import { COUNTER_SCREEN } from 'screens/Counter/index'

import homeIcoSrc from 'static/images/home.png'
import CounterIcoSrc from 'static/images/counter.png'


const tabs = [{
  label: 'Home',
  icon: homeIcoSrc,
  ...HOME_SCREEN,
}, {
  label: 'Redux Counter',
  icon: CounterIcoSrc,
  ...COUNTER_SCREEN,
}]

export const startTabBasedApp = () => Navigation.startTabBasedApp({
  tabs,
  animationType: 'fade',
  tabsStyle: {
    tabBarShowLabels: 'hidden',
    tabBarButtonColor: THEME.textOnPrimary,
    tabBarBackgroundColor: THEME.black,
    navBarButtonColor: THEME.black,
    tabBarSelectedButtonColor: THEME.primary,
  },
  appStyle: {
    orientation: 'portrait',
    forceTitlesDisplay: true,
    topBarElevationShadowEnabled: false,
    tabBarButtonColor: THEME.black,
    tabBarBackgroundColor: THEME.textOnPrimary,
    navBarButtonColor: THEME.black,
    tabBarSelectedButtonColor: THEME.primary,
  },
})
