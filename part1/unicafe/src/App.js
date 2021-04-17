import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <Header header='give feedback'/>
      <Button text='good' onClick={() => setGood(good +1)}/>
      <Button text='neutral' onClick={() => setNeutral(neutral +1)}/>
      <Button text='bad' onClick={() => setBad(bad +1)}/>
      <Header header='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
