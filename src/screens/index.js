/* eslint-disable import/no-named-as-default */
import { Navigation } from 'react-native-navigation'

import Home, { HOME_SCREEN } from './Home'
import Counter, { COUNTER_SCREEN } from './Counter'
import NestedScreenA, { NESTED_SCREEN_A } from './NestedScreenA'
import NestedScreenB, { NESTED_SCREEN_B } from './NestedScreenB'


const registerComponent = redux => (name, component) =>
  Navigation.registerComponent(name, () => component, redux.store, redux.Provider) // eslint-disable-line

export function registerScreens(redux) {
  registerComponent(redux)(HOME_SCREEN.screen, Home)
  registerComponent(redux)(COUNTER_SCREEN.screen, Counter)
  registerComponent(redux)(NESTED_SCREEN_A.screen, NestedScreenA)
  registerComponent(redux)(NESTED_SCREEN_B.screen, NestedScreenB)
}
