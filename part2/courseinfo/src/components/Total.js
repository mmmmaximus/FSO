import React from 'react'

const Total = (props) => {
  let total = 0
  for (let i=0; i < props.parts.length; i++) {
    total += props.parts[i].exercises
  }

  return (
    <p>
      <strong>
        total of {total} exercises
      </strong>
    </p>
  )
}

export default Total
