import { Navigation, ScreenVisibilityListener } from 'react-native-navigation'

import Left from './Left'
import Right from './Right'


const registerComponent =
  redux =>
    (name, component) =>
      Navigation.registerComponent(name, () => component, redux.store, redux.Provider)

export function registerScreens(redux) {
  registerComponent(redux)('example.Left', Left)
  registerComponent(redux)('example.Right', Right)
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`[ScreenVisibilityListener] Displaying screen ${screen}`),
    didAppear: ({ screen, startTime, endTime, commandType }) => console.log('[ScreenVisibilityListener] ', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({ screen }) => console.log(`[ScreenVisibilityListener] Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`[ScreenVisibilityListener] Screen disappeared ${screen}`),
  }).register()
}
