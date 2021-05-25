import { render, screen } from '@testing-library/react'
import Part from '../Part'
import renderer from 'react-test-renderer'

it('should render Part component', () => {
  const part = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  render(<Part key={part.name} name={part.name} exercises={part.exercises}/>)
  const PartElement = screen.getByTestId('Part')
  expect(PartElement).toBeInTheDocument

  expect(PartElement.textContent).toEqual('Fundamentals of React 10')
})

it('matches snapshot', () => {
  const part = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const tree = renderer.create(<Part key={part.name} name={part.name} exercises={part.exercises}/>).toJSON()
  expect(tree).toMatchSnapshot()
})
