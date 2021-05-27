import { render, screen } from '@testing-library/react'
import Header from './../Header'
import renderer from 'react-test-renderer'

test('Header component renders on screen', () => {
  render(<Header text='test text'/>)
  const HeaderElement = screen.getByText('test text')
  expect(HeaderElement).toBeInTheDocument
  expect(HeaderElement.textContent).toBe('test text')
})

it('matches snapshot', () => {
  const tree = renderer.create(<Header text='test text'/>).toJSON()
  expect(tree).toMatchSnapshot()
})
