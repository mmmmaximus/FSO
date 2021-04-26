import React from 'react'

const Input = ({text, func}) => {
  return (
    <div>
      {text}<input onChange={func} />
    </div>
  )
}

export default Input
