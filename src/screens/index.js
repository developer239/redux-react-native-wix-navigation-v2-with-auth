import { Navigation } from 'react-native-navigation'

import Home from './Home'
import Counter from './Counter'
import NestedScreenA from './NestedScreenA'
import NestedScreenB from './NestedScreenB'


const registerComponent =
  redux =>
    (name, component) =>
      Navigation.registerComponent(name, () => component, redux.store, redux.Provider)

export function registerScreens(redux) {
  registerComponent(redux)('app.Home', Home)
  registerComponent(redux)('app.Counter', Counter)
  registerComponent(redux)('app.NestedScreenA', NestedScreenA)
  registerComponent(redux)('app.NestedScreenB', NestedScreenB)
}
