import * as types from './constants'
import * as actions from './actions'


describe('Counter Actions', () => {
  it('should create an action to increment counter', () => {
    const expectedAction = { type: types.INCREMENT_COUNTER }
    expect(actions.incrementCounter()).toEqual(expectedAction)
  })
  it('should create an action to decrement counter', () => {
    const expectedAction = { type: types.DECREMENT_COUNTER }
    expect(actions.decrementCounter()).toEqual(expectedAction)
  })
  it('should create an action to reset counter', () => {
    const expectedAction = { type: types.RESET_COUNTER }
    expect(actions.clearCounter()).toEqual(expectedAction)
  })
})
