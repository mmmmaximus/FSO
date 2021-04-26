import React, { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newFilter, setNewFilter ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addContact = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }))
      setNewName('')
      setNewNumber('')
    }
  }
  
  const changeFilter = (event) => {
    setNewFilter(event.target.value)
  }
  const changeNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const changeName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with <input onChange={changeFilter} />
        </div>
      </form>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input onChange={changeName} />
        </div>
        <div>
          number: <input onChange={changeNumber} />
        </div>
        <div>
          <button onClick={addContact} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Numbers persons={persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))}/>
      ...
    </div>
  )
}

export default App
