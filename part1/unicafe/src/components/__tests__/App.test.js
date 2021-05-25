import { render, screen } from '@testing-library/react'
import { fireEvent, within } from '@testing-library/dom'
import App from './../../App'
import renderer from 'react-test-renderer'

describe('should render App component', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('if no feedback', () => {
    const AppElement = screen.getByTestId('App')
    expect(AppElement).toBeInTheDocument

    // render content of App component
    const HeaderInContent = within(AppElement).getAllByTestId('Header')
    expect(HeaderInContent.length).toBe(2)
    const ButtonInContent = within(AppElement).getAllByTestId('Button')
    expect(ButtonInContent.length).toBe(3)
  })

  test('if there is feedback', () => {
    const AppElement = screen.getByTestId('App')
    expect(AppElement).toBeInTheDocument

    // render content of App component
    const HeaderInContent = within(AppElement).getAllByTestId('Header')
    expect(HeaderInContent.length).toBe(2)
    const ButtonInContent = within(AppElement).getAllByTestId('Button')
    expect(ButtonInContent.length).toBe(3)

    // click 1 of the feedback buttons
    const goodButton = screen.getByText('good')
    fireEvent.click(goodButton)
    const StatisticsInContent = within(AppElement).getAllByTestId('Statistics')
    expect(StatisticsInContent.length).toBe(1)
  })
})

it('matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})
