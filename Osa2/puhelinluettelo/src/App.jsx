import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonsForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter,setNewFilter] = useState('')
  const [showPersons, setShowPersons] = useState(persons)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
        setShowPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
      setNewFilter('')
    } else {
      personService
        .create(personObject)
        .then(response => {
          const newList = persons.concat(response.data)
          setPersons(newList)
          setShowPersons(newList)
          setNewName('')
          setNewNumber('')
          setNewFilter('')
        }
      )
    }
  }

  const handleText = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    const filter = event.target.value
    setNewFilter(filter)
    setShowPersons(persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <PersonsForm name={newName} number={newNumber} handleText={handleText} handleNumber={handleNumber} submit={addName}/>
      <h2>Numbers</h2>
      <Persons persons={showPersons}/>
    </div>
  )

}

export default App
