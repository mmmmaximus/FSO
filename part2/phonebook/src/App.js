import React, { useState, useEffect } from 'react'
import Input from './components/Input'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import ErrorMessage from './components/ErrorMessage'
import phonebookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newFilter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const changeFilter = (event) => {
    setNewFilter(event.target.value)
  }
  const changeNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const changeName = (event) => {
    setNewName(event.target.value)
  }
  const clearInputs = () => {
    setNewName('')
    setNewNumber('')
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
  }

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
      if (persons.map(person => person.number).includes(newNumber)) {
        alert(`${newName} is already added to phonebook`)
      } else {
        if (window.confirm(`${newName} is already added to phonebook, replace old number?`)) {
          const changedPerson = persons.find(person => person.name === newName)
          phonebookService
            .update(changedPerson.id, { name: newName, number: newNumber })
            .then(person => {
              setPersons(persons.filter(person => person.name !== newName).concat(person))
              setMessageType('notification')
              setErrorMessage(`${person.name} has been updated`)
              setTimeout(() => {
                setErrorMessage('')
              }, 1000)
            }).catch(err => {
              setMessageType('error')
              setErrorMessage(`${newName} has already been deleted`)
              setTimeout(() => {
                setErrorMessage('')
              }, 1000)
            })
          clearInputs()
        }
      }
    } else {
      phonebookService
        .create({ name: newName, number: newNumber })
        .then(person => {
          setPersons(persons.concat(person))
          setMessageType('notification')
          setErrorMessage(`${person.name} has been added`)
          setTimeout(() => {
            setErrorMessage('')
          }, 1000)
        })
      clearInputs()
    }
  }

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      phonebookService
        .del(id)
        .then(phonebookService
          .index()
          .then(persons => {
            setPersons(persons.filter(person => person.id !== id))
            setMessageType('notification')
            setErrorMessage(`${name} has been deleted`)
            setTimeout(() => {
              setErrorMessage('')
            }, 1000)
          })
        )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <ErrorMessage message={errorMessage} type={messageType}/>
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
