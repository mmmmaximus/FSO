import React from 'react'
import Stats from './Stats'

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all || 0
  const positive = (good / all || 0) * 100 + '%'

  return (
    <div>
      <Stats text='good' number={good}/>
      <Stats text='neutral' number={neutral}/>
      <Stats text='bad' number={bad}/>
      <Stats text='all' number={all}/>
      <Stats text='average' number={average}/>
      <Stats text='positive' number={positive}/>
    </div>
  )
}

export default Statistics
