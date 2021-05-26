import { render, screen } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import Button from './../Button'
import App from './../../App'
import renderer from 'react-test-renderer'

test('button should render on screen', () => {
  // with right content
  const mockfn = jest.fn()
  render(<Button text='test text' onClick={mockfn} />)
  const ButtonElement = screen.getByText('test text')
  expect(ButtonElement).toBeInTheDocument
  expect(ButtonElement.textContent).toBe('test text')

  // calls onclick when clicked
  fireEvent.click(ButtonElement)
  expect(mockfn.mock.calls).toHaveLength(1)
})

test('good, neutral and bad buttons work', () => {
  render(<App />)
  const goodButton = screen.getByText('good')
  const neutralButton = screen.getByText('neutral')
  const badButton = screen.getByText('bad')

  expect(screen.getByTestId('Statistics').textContent).toBe('No feedback given')

  fireEvent.click(goodButton)
  expect(screen.getByTestId('Statistics').textContent).toContain('positive100%')

  fireEvent.click(neutralButton)
  expect(screen.getByTestId('Statistics').textContent).toContain('positive50%')

  fireEvent.click(badButton)
  expect(screen.getByTestId('Statistics').textContent).toContain('positive33.33333333333333%')
})

it('matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
