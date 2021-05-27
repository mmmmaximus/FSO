import React from 'react'

const Button = ({text, onClick}) => <div data-testid='Button'><button onClick={onClick}>{text}</button></div>

export default Button
