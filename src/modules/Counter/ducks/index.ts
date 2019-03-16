import * as types from './constants'
import { ICounterActions } from './actions.types'

export interface ICounterState {
  value: number
}

export const initialState = {
  value: 0,
}

const counterReducer = (state: ICounterState = initialState, action: ICounterActions) => {
  const { type } = action

  switch (type) {
    case types.RESET_COUNTER:
      return {
        value: 0,
      }
    case types.DECREMENT_COUNTER:
      return {
        value: state.value - 1,
      }
    case types.INCREMENT_COUNTER:
      return {
        value: state.value + 1,
      }
    default:
      return state
  }
}

export default counterReducer
