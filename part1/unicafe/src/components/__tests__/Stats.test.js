import { render, screen } from '@testing-library/react'
import Stats from './../Stats'
import renderer from 'react-test-renderer'

test('Stats should render on screen', () => {
  render(<Stats text='test text' number={1} />)
  const StatsElement = screen.getByText('test text')
  expect(StatsElement).toBeInTheDocument
  expect(StatsElement.textContent).toBe('test text')
})

it('matches snapshot', () => {
  const tree = renderer.create(<Stats text='test text' number={1} />).toJSON()
  expect(tree).toMatchSnapshot()
})
