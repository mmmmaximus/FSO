import React, { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  let array = new Array(anecdotes.length)
  for (let i=0; i<anecdotes.length; i++) {
    array[i] = 0
  }
  const [votes, setVotes] = useState(array)
  const vote = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
  }

  return (
    <div data-testid='App'>
      <Header text='Anecdote of the day'/>
      {anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <Button
        text='vote'
        onClick={vote}
      />
      <Button
        text='next anecdote'
        onClick={() => setSelected(Math.ceil((anecdotes.length - 1) * Math.random()))}
      />
      <Header text='Anecdote with most votes'/>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
      <br></br>
      has {Math.max(...votes)} votes
    </div>
  )
}

export default App
