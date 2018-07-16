import * as selectors from './selectors'


describe('Counter Selectors', () => {
  it('should select counter value', () => {
    const applicationState = { counter: { value: 3 } }
    expect(selectors.selectCounterValue(applicationState)).toEqual(3)
  })
})
