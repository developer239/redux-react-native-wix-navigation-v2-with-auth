import { combineReducers } from 'redux'
import counterReducer from './modules/Counter/ducks/index'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export default rootReducer
