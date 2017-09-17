import { Platform } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { registerScreens, registerScreenVisibilityListener } from './screens'
import store from './store'


import navBarIcon from './static/images/one.png'

registerScreens({ Provider, store })
registerScreenVisibilityListener()

const tabs = [{
  label: 'Left',
  screen: 'example.Left',
  title: 'Left Tab Screen',
  icon: navBarIcon,
}, {
  label: 'Right',
  screen: 'example.Right',
  title: 'Right Tab Screen',
  icon: navBarIcon,
}]

// this will start our app
Navigation.startTabBasedApp({
  tabs,
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
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
