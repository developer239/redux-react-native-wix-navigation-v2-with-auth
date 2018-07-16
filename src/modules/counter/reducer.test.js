import reducer from './reducer'
import * as types from './constants'


describe('Counter Reducer', () => {
  let initialState

  beforeEach(() => {
    initialState = { value: 0 }
  })

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      value: 0,
    })
  })

  it('should return incremented state', () => {
    expect(reducer(initialState, { type: types.INCREMENT_COUNTER })).toEqual({
      value: 1,
    })
  })

  it('should return decremented state', () => {
    expect(reducer(initialState, { type: types.DECREMENT_COUNTER })).toEqual({
      value: -1,
    })
  })

  it('should return cleared state', () => {
    expect(reducer({ value: 2 }, { type: types.RESET_COUNTER })).toEqual({
      value: 0,
    })
  })
})
