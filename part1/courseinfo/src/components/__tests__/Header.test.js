import { render, screen } from '@testing-library/react'
import Header from '../Header'
import renderer from 'react-test-renderer'

it('should render Header component', () => {
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
  render(<Header course={course.name}/>)
  const HeaderElement = screen.getByTestId('Header')
  expect(HeaderElement).toBeInTheDocument
  expect(HeaderElement.textContent).toBe('Half Stack application development')
})

test('matches snapshot', () => {
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
  const tree = renderer.create(<Header course={course.name}/>).toJSON()
  expect(tree).toMatchSnapshot()
})
