// __tests__/Intro-test.js
import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../index'

describe('Button', () => {
  test('renders correctly', () => {
    const onPressHandler = jest.fn()
    const tree = renderer
      .create(<Button onPress={onPressHandler}>Some Text</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
