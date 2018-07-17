import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { NestedScreenB } from './index'


describe('NestedScreenB Component', () => {
  it('renders with alert button', () => {
    const fakeHandler = sinon.fake()
    const wrapper = shallow(
      <NestedScreenB
        shouldShowAlertButton
        handleHideAlertButton={fakeHandler}
      />,
    )
    wrapper.find('ButtonComponent').at(1).simulate('press')

    expect(fakeHandler.callCount).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders without alert button', () => {
    const fakeHandler = sinon.fake()
    const wrapper = shallow(
      <NestedScreenB
        shouldShowAlertButton={false}
        handleShowAlertButton={fakeHandler}
      />,
    )
    wrapper.find('ButtonComponent').at(1).simulate('press')

    expect(fakeHandler.callCount).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })

  it('calls pop screen handler', () => {
    const fakeHandler = sinon.fake()
    const wrapper = shallow(<NestedScreenB handlePopToRoot={fakeHandler} />)
    wrapper.find('ButtonComponent').at(0).simulate('press')

    expect(fakeHandler.callCount).toEqual(1)
  })
})
