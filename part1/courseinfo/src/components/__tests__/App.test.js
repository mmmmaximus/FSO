import { render, screen } from '@testing-library/react'
import { within } from '@testing-library/dom'
import App from './../../App'
import renderer from 'react-test-renderer'

it('should render App component', () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  render(<App />)
  const AppElement = screen.getByTestId('App')
  expect(AppElement).toBeInTheDocument

  // render contents of App component
  const HeaderInContent = within(AppElement).getAllByTestId('Header')
  expect(HeaderInContent.length).toBe(1)
  const ContentInContent = within(AppElement).getAllByTestId('Content')
  expect(ContentInContent.length).toBe(1)
  const TotalInContent = within(AppElement).getAllByTestId('Total')
  expect(TotalInContent.length).toBe(1)
})

it('matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
