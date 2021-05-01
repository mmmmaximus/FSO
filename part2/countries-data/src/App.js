import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  
  const changeFilter = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  
  return (
    <div>
      <Filter func={changeFilter}/>
      <Countries 
        countries={
          countries.filter(
            country => country.name.toLowerCase().includes(filter.toLowerCase())
          )
        }
        filter={filter}
      />
    </div>
  )
}

export default App;
