import { render, screen } from '@testing-library/react'
import App from '../../App'
import { within } from '@testing-library/dom'
import renderer from 'react-test-renderer'

test('App component renders properly', () => {
  render(<App />)
  const AppElement = screen.getByTestId('App')
  expect(AppElement).toBeInTheDocument

  // render content in App component
  const InputInApp = within(AppElement).getAllByRole('heading')
  expect(InputInApp.length).toBe(3)
  const PersonFormInApp = within(AppElement).getAllByTestId('PersonForm')
  expect(PersonFormInApp.length).toBe(1)
  const PersonsInApp = within(AppElement).getAllByTestId('Persons')
  expect(PersonsInApp.length).toBe(1)
})

it('matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
