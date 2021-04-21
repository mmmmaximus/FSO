import React from 'react'

const Total = ({parts}) => {
  const total = parts.map(part => part.exercises).reduce((a,b) => a+b)

  return (
    <p>
      <strong>
        total of {total} exercises
      </strong>
    </p>
  )
}

export default Total
