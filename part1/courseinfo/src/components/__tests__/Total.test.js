import { render, screen } from '@testing-library/react'
import Total from '../Total'
import renderer from 'react-test-renderer'

it('should render Total component', () => {
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
  // check render properly
  render(<Total parts={course.parts}/>)
  const TotalElement = screen.getByTestId('Total')
  expect(TotalElement).toBeInTheDocument

  // check Total content
  let total = 0
  for (let i=0; i < course.parts.length; i++) {
    total += course.parts[i].exercises
  }
  expect(TotalElement.textContent).toEqual(`Number of exercises ${total}`)
})

it('matches snapshot', () => {
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
  const tree = renderer.create(<Total parts={course.parts}/>).toJSON()
  expect(tree).toMatchSnapshot()
})
