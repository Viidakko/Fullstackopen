import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonsForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter,setNewFilter] = useState('')
  const [showPersons, setShowPersons] = useState(persons)
  const [showMessage, setShowMessage] = useState(null)
  const [isErrormessage, setErrorMessage] = useState(false)

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
      number: newNumber
    }
    if (persons.some(person => person.name === personObject.name)) {
      if (window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(persons.find(p => p.name === personObject.name).id, personObject)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.name !== personObject.name ? person : updatedPerson.data))
            setShowPersons(persons.map(person => person.name !== personObject.name ? person : updatedPerson.data))
          })
          .catch(error => {
            setErrorMessage(true)
            setShowMessage(`The person ${personObject.name} has already been removed from the server`)
            setPersons(persons.filter(p => p.name !== personObject.name))
            setShowPersons(persons.filter(p => p.name !== personObject.name))
            setTimeout(() => {setShowMessage(null)} , 5000)
          })
        setErrorMessage(false)
        setShowMessage(`Updated phone number for ${personObject.name}`)
        setTimeout(() => {setShowMessage(null)} , 3000)
      }
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
          setErrorMessage(false)
          setShowMessage(`Added ${newName}`)
          setTimeout(() => {setShowMessage(null)} , 3000)
        }
      )
    }
  }

  const deletePerson = (id) => {
    if (window.confirm(`Delete ${persons.find(p => p.id === id).name}?`)) {
      setErrorMessage(false)
      setShowMessage(`Deleted '${persons.find(p => p.id === id).name}'`)
      setTimeout(() => {setShowMessage(null)} , 3000)
      personService.destroy(id)
        .catch(error => {
          setErrorMessage(true)
          setShowMessage(`The person ${persons.find(p => p.id === id).name} was already deleted from the server`)
          setPersons(persons.filter(p => p.id !== id))
          setShowPersons(persons.filter(p => p.id !== id))
          setTimeout(() => {setShowMessage(null)} , 3000)
        })
      setPersons(persons.filter(p => p.id !== id))
      setShowPersons(persons.filter(p => p.id !== id))
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
      <h1>Phonebook</h1>
      <Notification message={showMessage} error={isErrormessage}/>
      <Filter filter={newFilter} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <PersonsForm name={newName} number={newNumber} handleText={handleText} handleNumber={handleNumber} submit={addName}/>
      <h2>Numbers</h2>
      <Persons persons={showPersons} delPerson={deletePerson}/>
    </div>
  )

}

export default App
