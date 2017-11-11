import { Provider } from 'react-redux'
import { startTabBasedApp } from './navigation'
import { registerScreens } from './screens'
import store from './store'


registerScreens({ Provider, store })
startTabBasedApp()
