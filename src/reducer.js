import { combineReducers } from 'redux'
import counterReducer from 'modules/counter/reducer'


const rootReducer = combineReducers({
  counter: counterReducer,
})

export default rootReducer
