import { Navigation } from 'react-native-navigation'


import homeIcoSrc from './static/images/home.png'
import CounterIcoSrc from './static/images/counter.png'


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
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff8f72',
    tabBarBackgroundColor: '#000000',
  },
  appStyle: {
    orientation: 'portrait',
    forceTitlesDisplay: true,
    tabBarBackgroundColor: '#ffffff',
    tabBarButtonColor: '#000000',
    tabBarSelectedButtonColor: '#ff8f72',
    navBarButtonColor: '#151515',
    navBarBackgroundColor: '#ffffff',
    topBarElevationShadowEnabled: false,
  },
})
