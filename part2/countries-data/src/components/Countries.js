import React from "react"
import Country from './Country'

const Countries = ({countries, filter}) => {
  
  if (filter === '') {
    return 'Search for a country'
  } else if (countries.length > 10) {
    return 'Too many matches, specify another filter'
  } else if (countries.length <= 10 && countries.length > 1) {
    return (
      <div>
        {countries.map(country => <p key={country.name}>{country.name}</p>)}
      </div>
    )
  } else {
    return (
      <div>
        {countries.map(country => 
          <Country country={country}/>
        )}
      </div>
    )
  }
}

export default Countries
