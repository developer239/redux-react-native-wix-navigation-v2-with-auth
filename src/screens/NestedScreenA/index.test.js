import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { NestedScreenA } from './index'


describe('NestedScreenA Component', () => {
  it('renders with all props', () => {
    const wrapper = shallow(<NestedScreenA />)
    expect(wrapper).toMatchSnapshot()
  })

  it('calls open screen handler', () => {
    const handleOpenScreenB = sinon.fake()
    const wrapper = shallow(
      <NestedScreenA handleOpenScreenB={handleOpenScreenB} />,
    )
    wrapper.find('ButtonComponent').simulate('press')
    expect(handleOpenScreenB.callCount).toBe(1)
  })
})
