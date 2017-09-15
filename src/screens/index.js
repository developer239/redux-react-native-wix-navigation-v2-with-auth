import { Navigation, ScreenVisibilityListener } from 'react-native-navigation'

import Left from './Left'
import Right from './Right'


export function registerScreens(redux) {
  Navigation.registerComponent('example.Left', () => Left, redux.store, redux.Provider)
  Navigation.registerComponent('example.Right', () => Right, redux.store, redux.Provider)
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`[ScreenVisibilityListener] Displaying screen ${screen}`),
    didAppear: ({ screen, startTime, endTime, commandType }) => console.log('[ScreenVisibilityListener] ', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({ screen }) => console.log(`[ScreenVisibilityListener] Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`[ScreenVisibilityListener] Screen disappeared ${screen}`),
  }).register()
}
