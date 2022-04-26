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

  const updatePerson = (person) => {
    if(window.confirm(`${person.name} is already added to phonebook, replace the old one number with a new one?`))
      personServices
      .updatePerson(person.id,person)
      .then(updatedNumber => {
        setErrorMessage(
          `Updated ${updatedNumber.name} number, please reload the page`
        )
        setClassMessage('success')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        .catch(error => {
          setErrorMessage(
            `Cant update ${person.name} number`
          )
          setClassMessage('error')
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
      })
      })      
  }

  const createPerson = (person) => {
    personServices
    .createPerson(person)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
      setErrorMessage(
        `Added ${person.name}`
      )
      setClassMessage('success')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }).catch(error => {
      setErrorMessage(
        `Cant add ${person.name}`
      )
      setClassMessage('error')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
  }

  const deletePerson = (person) => {
    if(window.confirm(`Delete ${person.name}`)) {
        personServices
            .deletePerson(person.id)
            .then(deletedPerson => {
                setErrorMessage(
                    `Deleted ${deletedPerson.name}, please reload the page`
                  )
                  setClassMessage('success')
                  setTimeout(() => {
                    setErrorMessage(null)
                  }, 5000)
            })
            .catch(error => {
                setErrorMessage(
                  `${person.name} was already removed from server`
                )
                setClassMessage('error')
                setTimeout(() => {
                  setErrorMessage(null)
                }, 5000)
            })
    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: ++CONTADOR,
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