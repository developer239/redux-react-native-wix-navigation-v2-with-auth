import { combineReducers } from 'redux'
import counterReducer, { ICounterState } from './modules/Counter/ducks/index'

export interface IAppStore {
  counter: ICounterState
}

const rootReducer = combineReducers<IAppStore>({
  counter: counterReducer,
})

export default rootReducer
