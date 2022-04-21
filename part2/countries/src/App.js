import { useState,useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  
  return (
    <div>
      <Filter name={filter} onChange={handleFilterChange}/>
      <Countries countries={countries} filter={filter} />
    </div>
  )
}

export default App