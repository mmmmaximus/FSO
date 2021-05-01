import React from 'react'

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
    </div>
  )
}

export default Country
