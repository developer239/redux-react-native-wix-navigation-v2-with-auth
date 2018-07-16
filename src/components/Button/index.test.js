import { Text } from 'react-native'
import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import Button from './index'


describe('Button Component', () => {
  it('renders with all props', () => {
    const wrapper = shallow(
      <Button>
        First Text
      </Button>,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('calls handler on press', () => {
    const onPressHandler = sinon.fake()
    const wrapper = shallow(
      <Button onPress={onPressHandler}>
        <Text>
          First Text
        </Text>
      </Button>,
    )
    wrapper.simulate('press')
    expect(onPressHandler.callCount).toBe(1)
  })
})
