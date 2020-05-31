import React from 'react';
import SunriseSunset from './SunriseSunset'
import HourlyForecast from './HourlyForecast'
import Navbar from './Navbar'
import SpotifyPlayer from './SpotifyPlayer'

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
    <div className='weather-comps'>
      <SunriseSunset
      sunrise={Date(weather.sunrise * 1000).split(" ")[4]}
      sunset={Date(weather.sunset * 1000).split(" ")[4]}/>

      <div className="hourly-forecast">
        <h4>  Hourly Forecast </h4>
        {hourlyForecast}
      </div>

      <SpotifyPlayer desc={weather.desc}/>
    </div>
  )
}

export default Weather;
