import React from 'react'

const Header = (props) => {
  return (
    <h1 data-testid='Header'>{props.course}</h1>
  )
}

export default Header
