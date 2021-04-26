import React, { useState } from 'react'
import Input from './components/Input'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
      <Input text='filter shown with ' func={changeFilter} />
      <h2>add a new</h2>
      <PersonForm changeName={changeName} changeNumber={changeNumber} addContact={addContact}/>
      <h2>Numbers</h2>
      <Persons persons={
        persons.filter(
          person => person.name.toLowerCase().includes(newFilter.toLowerCase())
        )
      }/>
      ...
    </div>
  )
}

export default App
