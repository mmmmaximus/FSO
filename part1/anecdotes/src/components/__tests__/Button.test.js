import { fireEvent, render, screen } from '@testing-library/react'
import Button from './../Button'
import App from './../../App'
import renderer from 'react-test-renderer'
import { useState } from 'react'

test('Button component renders on screen', () => {
  const mockfn = jest.fn()
  render(<Button text='test text' onClick={mockfn}/>)
  const ButtonElement = screen.getByText('test text')
  expect(ButtonElement).toBeInTheDocument
  expect(ButtonElement.textContent).toBe('test text')

  // calls func when clicked
  fireEvent.click(ButtonElement)
  expect(mockfn.mock.calls).toHaveLength(1)
})

test('vote button works', () => {
  render(<App />)
  const AppElement = screen.getByTestId('App')
  const voteButton = screen.getByText('vote')
  expect(AppElement.textContent).toContain('has 0 votes')

  fireEvent.click(voteButton)
  expect(AppElement.textContent).toContain('has 1 votes')
  expect(AppElement.textContent).not.toContain('has 0 votes')

  // check if next anecdote button works, using enzyme?
})

it('matches snapshot', () => {
  const mockfn = jest.fn()
  const tree = renderer.create(<Button text='test text' onClick={mockfn} />).toJSON()
  expect(tree).toMatchSnapshot()
})
