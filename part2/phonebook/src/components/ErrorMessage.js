import React from 'react'

const ErrorMessage = ({message, type}) => {
  if (message === '') {
    return null
  }
  if (type === 'error') {
    return <div data-testid='ErrorMessage' className='error'>{message}</div>
  } else {
    return <div data-testid='ErrorMessage' className='notification'>{message}</div>
  }
}

export default ErrorMessage
