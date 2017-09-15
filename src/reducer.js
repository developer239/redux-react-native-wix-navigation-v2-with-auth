import { combineReducers } from 'redux'
import defaultReducer from 'modules/default/reducer'


const rootReducer = combineReducers({
  default: defaultReducer,
})

export default rootReducer
