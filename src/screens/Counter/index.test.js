import React from 'react'
import { shallow } from 'enzyme'
import { CounterScreen } from './index'


describe('Counter Component', () => {
  let counterValue
  const dispatchIncrementCounter = () => {
    counterValue += 1
  }
  const dispatchDecrementCounter = () => {
    counterValue -= 1
  }
  const dispatchClearCounter = () => {
    counterValue = 0
  }

  beforeEach(() => {
    counterValue = 0
  })

  it('renders with all props', () => {
    const wrapper = shallow(
      <CounterScreen
        counterValue={counterValue}
        dispatchIncrementCounter={dispatchIncrementCounter}
        dispatchDecrementCounter={dispatchDecrementCounter}
        dispatchClearCounter={dispatchClearCounter}
      />,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('calls counter handlers', () => {
    const wrapper = shallow(
      <CounterScreen
        counterValue={counterValue}
        dispatchIncrementCounter={dispatchIncrementCounter}
        dispatchDecrementCounter={dispatchDecrementCounter}
        dispatchClearCounter={dispatchClearCounter}
      />,
    )

    const buttons = wrapper.find('ButtonComponent')

    buttons.at(0).simulate('press')
    buttons.at(0).simulate('press')
    expect(counterValue).toBe(2)

    buttons.at(1).simulate('press')
    expect(counterValue).toBe(1)

    buttons.at(2).simulate('press')
    expect(counterValue).toBe(0)
  })
})
