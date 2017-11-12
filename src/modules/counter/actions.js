import * as types from './constants'


export const incrementCounter = () => ({ type: types.INCREMENT_COUNTER })
export const decrementCounter = () => ({ type: types.DECREMENT_COUNTER })
export const clearCounter = () => ({ type: types.RESET_COUNTER })
