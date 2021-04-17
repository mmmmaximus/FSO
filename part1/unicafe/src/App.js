import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import Stats from './Stats'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = (good / all || 0) * 100 + '%'

  return (
    <div>
      <Header header='give feedback'/>
      <Button text='good' onClick={() => setGood(good +1)}/>
      <Button text='neutral' onClick={() => setNeutral(neutral +1)}/>
      <Button text='bad' onClick={() => setBad(bad +1)}/>
      <Header header='statistics'/>
      <Stats text='good' number={good}/>
      <Stats text='neutral' number={neutral}/>
      <Stats text='bad' number={bad}/>
      <Stats text='all' number={all}/>
      <Stats text='average' number={average}/>
      <Stats text='positive' number={positive}/>
    </div>
  )
}

export default App
