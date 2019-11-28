import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../index'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import renderer from 'react-test-renderer'

it('rendered without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button />, div)
})

it('renders button correctly', () => {
  const { getByTestId } = render(<Button label="Click me please" />)
  expect(getByTestId('button')).toHaveTextContent('Click me please')
})

it('renders button correctly', () => {
  const { getByTestId } = render(<Button label="Save" />)
  expect(getByTestId('button')).toHaveTextContent('Save')
})

it('matches snapshot save', () => {
  const tree = renderer.create(<Button label="Save" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('matches snapshot cancel', () => {
  const tree = renderer.create(<Button label="Cancel" />).toJSON()
  expect(tree).toMatchSnapshot()
})
