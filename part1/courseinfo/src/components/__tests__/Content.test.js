import { render, screen } from '@testing-library/react'
import { within } from '@testing-library/dom'
import Content from '../Content'
import renderer from 'react-test-renderer'

it('should render Content component', () => {
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
  // render Content component
  render(<Content parts={course.parts}/>)
  const ContentElement = screen.getByTestId('Content')
  expect(ContentElement).toBeInTheDocument

  // render contents of Content component
  const PartsInContent = within(ContentElement).getAllByTestId('Part')
  expect(PartsInContent.length).toBe(course.parts.length)
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
  const tree = renderer.create(<Content parts={course.parts}/>).toJSON()
  expect(tree).toMatchSnapshot()
})
