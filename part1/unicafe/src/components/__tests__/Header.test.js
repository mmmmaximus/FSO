import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './../Header'
import renderer from 'react-test-renderer'

it('should render Header component', () => {
  render(<Header header='header text'/>)

  // renders Header
  const HeaderElement = screen.getByTestId('Header')
  expect(HeaderElement).toBeInTheDocument

  // renders correct content of Header
  expect(HeaderElement.textContent).toBe('header text')
})

it('matches snapshot', () => {
  const tree = renderer.create(<Header header='test text' />).toJSON()
  expect(tree).toMatchSnapshot()
})
