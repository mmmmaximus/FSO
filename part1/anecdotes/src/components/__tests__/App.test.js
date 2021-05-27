import { render, screen } from '@testing-library/react'
import App from './../../App'
import renderer from 'react-test-renderer'

test('App component renders on screen', () => {
  render(<App />)
  const AppElement = screen.getByTestId('App')
  expect(AppElement).toBeInTheDocument

  // render content of App component
  const HeaderInContent = screen.getAllByTestId('Header')
  expect(HeaderInContent.length).toBe(2)
  const ButtonInContent = screen.getAllByTestId('Button')
  expect(ButtonInContent.length).toBe(2)
})

it('matches snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})
