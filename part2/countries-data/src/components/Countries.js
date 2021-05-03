import React from "react"
import Country from './Country'

const Countries = ({countries, filter, showButton}) => {
  const filteredCountries = countries.filter(
    country => country.name.toLowerCase().includes(filter.toLowerCase())
  )
  
  if (filter === '') {
    return 'Search for a country'
  } else if (filteredCountries.length > 10) {
    return 'Too many matches, specify another filter'
  } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return <div>
      {filteredCountries.map(country => 
        <div>
          <p key={country.name}>{country.name} <button onClick={showButton} value={country.name}>show</button></p>
        </div>
      )}
    </div>
  } else {
    return <div>
      {filteredCountries.map(country => 
        <Country country={country}/>
      )}
    </div>
  }
}

export default Countries
