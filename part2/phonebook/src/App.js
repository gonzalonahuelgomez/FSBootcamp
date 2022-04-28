import { useState,useEffect } from 'react'
import personServices from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

let CONTADOR = 4

const App = () => {
  
  const [persons, setPersons] = useState([ ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState()
  const [classMessage, setClassMessage] = useState()

  const Notification = ({ message, typeClass }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={typeClass}>
        {message}
      </div>
    )
  }

  useEffect(() => {
    personServices
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const setSuccess = message => {
    setErrorMessage(message)
    setClassMessage('success')
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const setError = message => {
    setErrorMessage(message)
    setClassMessage('error')
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const updatePerson = (person) => {
    debugger
    if(window.confirm(`${person.name} is already added to phonebook, replace the old one number with a new one?`))
      personServices
      .updatePerson(person.id,person)
      .then(updatedNumber => {
        setSuccess(`Updated ${updatedNumber.name} number, please reload the page`)
      })
      .catch(error => {
          setError(`Cant update ${person.name} number`)          
      })      
  }

  const createPerson = (person) => {
    personServices
    .createPerson(person)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
      setSuccess(`Added ${person.name}`)      
    }).catch(error => {
      setError(`Cant add ${person.name}`)     
    })
  }

  const deletePerson = (person) => {
    if(window.confirm(`Delete ${person.name}`)) {
        personServices
            .deletePerson(person.id)
            .then(deletedPerson => {
              setSuccess(`Deleted, please reload the page`)                 
            })
            .catch(error => {
                setError(`${person.name} was already removed from server`)                
            })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: CONTADOR++,
      name: newName,
      number: newNumber,
    }
    persons.map(person => person.name).includes(newName) ? 
      updatePerson(personObject) : 
      createPerson(personObject)      
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} typeClass  ={classMessage}/>
      <Filter name={filter} onChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deletePerson={deletePerson}/>
    </div>
  )
}

export default App