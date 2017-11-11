import { Navigation } from 'react-native-navigation'
import { THEME } from 'config'

import homeIcoSrc from 'static/images/home.png'
import CounterIcoSrc from 'static/images/counter.png'


const tabs = [{
  label: 'Home',
  screen: 'app.Home',
  title: 'Home',
  icon: homeIcoSrc,
}, {
  label: 'Redux Counter',
  screen: 'app.Counter',
  title: 'Redux Counter',
  icon: CounterIcoSrc,
}]

export const startTabBasedApp = () => Navigation.startTabBasedApp({
  tabs,
  animationType: 'fade',
  tabsStyle: {
    tabBarShowLabels: 'hidden',
    tabBarButtonColor: THEME.textOnPrimary,
    tabBarBackgroundColor: '#000000',
    navBarButtonColor: '#000000',
    tabBarSelectedButtonColor: THEME.primary,
  },
  appStyle: {
    orientation: 'portrait',
    forceTitlesDisplay: true,
    topBarElevationShadowEnabled: false,
    tabBarButtonColor: '#000000',
    tabBarBackgroundColor: THEME.textOnPrimary,
    navBarButtonColor: '#000000',
    tabBarSelectedButtonColor: THEME.primary,
  },
})
