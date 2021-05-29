import { render, screen } from '@testing-library/react'
import ErrorMessage from '../ErrorMessage'
import renderer from 'react-test-renderer'

describe('ErrorMessage component renders properly when', () => {
  it('has error message', () => {
    render(<ErrorMessage message='error text' type='error'/>)
    const ErrorMessageElement = screen.getByTestId('ErrorMessage')
    expect(ErrorMessageElement.textContent).toBe('error text')
  })

  it('has notification message', () => {
    render(<ErrorMessage message='notification text' type='error'/>)
    const ErrorMessageElement = screen.getByTestId('ErrorMessage')
    expect(ErrorMessageElement.textContent).toBe('notification text')
  })

  it('matches snapshot', () => {
    const tree = renderer.create(<ErrorMessage message='error message' type=''/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
