import React from 'react'
import { render } from '@testing-library/react-native'
import { Home, HOME_TEST_ID } from '../index'

describe('[pages] Home', () => {
  it('should render correctly', () => {
    const renderer = render(<Home />)
    const renderedElement = renderer.getByTestId(HOME_TEST_ID)
    expect(renderedElement).toBeTruthy()
  })
})
