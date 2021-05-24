import React from 'react'

const Part = (props) => {
  return (
    <p data-testid='Part'>
      {props.name} {props.exercises}
    </p>
  )
}

export default Part
