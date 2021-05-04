import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Weather = ({city}) => {
  const [weather, setWeather] = useState('')

  useEffect(() => {
    axios
      .get(`http://api.weatherbit.io/v2.0/current?city=${city}&key=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        setWeather(response.data.data[0])
      })
  }, [city])

  if (weather) {
    return <div>
      <b>temperature: </b>{weather.temp}°C<br />
      {weather.weather.description}<br />
      <b>wind: </b>{weather.wind_spd} m/s direction {weather.wind_cdir}
    </div>
  } else {
    return <div></div>
  }
}

export default Weather
