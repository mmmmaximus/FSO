import React from 'react'

const Stats = ({text, number}) => {
  return (
    <tr data-testid='Stats'>
      <td>{text}</td>
      <td>{number}</td>
    </tr>
  )
}

export default Stats
