import { combineReducers } from 'redux'
import calculatorReducer from 'modules/calculator/reducer'


const rootReducer = combineReducers({
  calculator: calculatorReducer,
})

export default rootReducer
