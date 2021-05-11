import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Input from './components/Input'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

  const addContact = (event) => {
    event.preventDefault()
    if (newName === '' || newNumber === '') {
      alert(`Name and Number must be filled in`)
    } else if (persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
    } else {
      axios
        .post('http://localhost:3001/persons', { name: newName, number: newNumber })
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          document.getElementById('name').value = ''
          document.getElementById('number').value = ''
        })
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
