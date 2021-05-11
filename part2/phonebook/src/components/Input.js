import React from 'react'

const Input = ({id, text, func}) => {
  return (
    <div>
      {text}<input id={id} onChange={func} />
    </div>
  )
}

export default Input
