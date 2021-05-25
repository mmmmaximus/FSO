import React from 'react'

const Button = ({text, onClick}) => <button onClick={onClick} data-testid='Button'>{text}</button>

export default Button
