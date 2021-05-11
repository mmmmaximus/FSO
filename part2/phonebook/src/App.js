import React, { useState, useEffect } from 'react'
import Input from './components/Input'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  useEffect(() => {
    phonebookService
      .index()
      .then(persons => setPersons(persons))
  }, [])

  const addContact = (event) => {
    event.preventDefault()
    if (newName === '' || newNumber === '') {
      alert(`Name and Number must be filled in`)
    } else if (persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
    } else {
      phonebookService
        .create({ name: newName, number: newNumber })
        .then(person => {
          setPersons(persons.concat(person))
        })
      setNewName('')
      setNewNumber('')
      document.getElementById('name').value = ''
      document.getElementById('number').value = ''
    }
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      phonebookService
        .del(id)
        .then(phonebookService
          .index()
          .then(persons =>
            setPersons(persons.filter(person => person.id !== id))
          )
      )
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
      <Persons deletePerson={deletePerson} persons={
        persons.filter(
          person => person.name.toLowerCase().includes(newFilter.toLowerCase())
        )
      }/>
      ...
    </div>
  )
}

export default App
