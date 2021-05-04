import React from 'react'
import Weather from './Weather'

const Country = ({country}) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      {country.languages.map((language, index) => 
        <li key={index}>{language.name}</li>
      )}
      <img src={country.flag} width="150" height="150" alt={country.name}/>
      <h3>Weather in {country.name}</h3>
      <Weather city={country.capital}/>
    </div>
  )
}

export default Country
