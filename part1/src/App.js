import { useState } from 'react'
import Person from './components/Person'

let CONTADOR = 0

const App = () => {
  
  const [persons, setPersons] = useState([
    { id: 0, name: 'Arto Hellas', number: '040-123456' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: ++CONTADOR,
      name: newName,
      number: newNumber,
    }
    persons.map(person => person.name).includes(newName) ? alert(`${newName} is already added to phonebook`) : 
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <Person key={person.id} person={person}/>
      )}
    </div>
  )
}

export default App