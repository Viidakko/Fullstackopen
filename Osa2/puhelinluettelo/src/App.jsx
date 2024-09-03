import { useState } from 'react'

const Person = ({name}) => {
  return (
    <p> {name}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }
    if (persons.some(person => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      setNewName('')
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }
  const handleText = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div >
          name: <input 
            value={newName}
            onChange={handleText}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
          <Person key={person.name} name={person.name} />
      )}
    </div>
  )

}

export default App
