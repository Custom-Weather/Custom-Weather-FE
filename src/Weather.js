import React from 'react';
import SunriseSunset from './SunriseSunset'
import HourlyForecast from './HourlyForecast'
import Navbar from './Navbar'

const Weather = ({weather}) => {
  const hourlyForecast = weather.hourly.map(weather => {
    return (
      <HourlyForecast
      hour={Date(weather.dt * 1000).split(" ")[4]}
      icon={weather.weather[0].icon}
      temp={weather.temp}
      desc={weather.weather[0].description}/>
    )
  })

  return (
    <div>
    <SunriseSunset
    sunrise={Date(weather.sunrise * 1000).split(" ")[4]}
    sunset={Date(weather.sunset * 1000).split(" ")[4]}/>

    {hourlyForecast}
    </div>
  )
}

export default Weather;
