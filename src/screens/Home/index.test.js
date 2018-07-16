import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { HomeScreen } from './index'


describe('Home Component', () => {
  it('renders with all props', () => {
    const wrapper = shallow(<HomeScreen />)
    expect(wrapper).toMatchSnapshot()
  })

  it('calls open screen handler', () => {
    const handleOpenScreenA = sinon.fake()
    const wrapper = shallow(
      <HomeScreen handleOpenScreenA={handleOpenScreenA} />,
    )
    wrapper.find('ButtonComponent').simulate('press')
    expect(handleOpenScreenA.callCount).toBe(1)
  })
})
