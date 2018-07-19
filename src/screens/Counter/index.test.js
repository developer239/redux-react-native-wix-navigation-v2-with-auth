import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { CounterScreen } from './index'


describe('Counter Component', () => {
  const counterValue = 0
  const dispatchIncrementCounter = sinon.fake()
  const dispatchDecrementCounter = sinon.fake()
  const dispatchClearCounter = sinon.fake()

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
    expect(dispatchIncrementCounter.callCount).toBe(1)

    buttons.at(1).simulate('press')
    expect(dispatchDecrementCounter.callCount).toBe(1)

    buttons.at(2).simulate('press')
    expect(dispatchClearCounter.callCount).toBe(1)
  })
})
