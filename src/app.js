import { Platform } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { registerScreens, registerScreenVisibilityListener } from './screens'


registerScreens()
registerScreenVisibilityListener()

const tabs = [{
    label: 'Left',
    screen: 'example.Left',
    title: 'Left Tab Screen',
}, {
    label: 'Right',
    screen: 'example.Right',
    title: 'Right Tab Screen',
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
