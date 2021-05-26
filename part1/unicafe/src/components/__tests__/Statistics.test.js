import { render, screen } from '@testing-library/react'
import { within } from '@testing-library/dom'
import Statistics from './../Statistics'
import renderer from 'react-test-renderer'

test('component should render on screen', () => {
  // render Statistics component
  render(<Statistics good={1} neutral={2} bad={3}/>)
  const StatisticsElement = screen.getByTestId('Statistics')
  expect(StatisticsElement).toBeInTheDocument

  // render Stats component in Statistics
  const StatsInStatictics = within(StatisticsElement).getAllByTestId('Stats')
  expect(StatsInStatictics.length).toBe(6)
})

it('matches snapshot', () => {
  const tree = renderer.create(<Statistics good={1} neutral={2} bad={3}/>).toJSON()
  expect(tree).toMatchSnapshot()
})
