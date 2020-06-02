import React from 'react';
import SunriseSunset from './SunriseSunset'
import HourlyForecast from './HourlyForecast'
import LocationTempRange from './LocationTempRange'
import Navbar from './Navbar'
import SpotifyPlayer from './SpotifyPlayer'

const Weather = ({weather}) => {
  console.log(weather)
  const hourlyForecast = weather.hourly.map(weather => {
    return (
      <HourlyForecast
      hour={weather.dt}
      icon={weather.weather[0].icon}
      temp={weather.temp}
      desc={weather.weather[0].description}/>
    )
  })

  // const notifications = weather.notifications.map(notification => {
  //   return (
  //     <Notifications
  //     current_desc={weather.desc}
  //     hour={notification}
  //     icon={notification.notification[0].icon}
  //     temp={notification.temp}
  //     desc={notification.weather[0].description}/>
  //   )
  // })

  return (
    <div className='weather-comps'>
      <SunriseSunset
      sunrise={weather.sunrise}
      sunset={weather.sunset}/>

      <SpotifyPlayer desc={weather.desc}/>

      <LocationTempRange
      current={weather.current}
      high={weather.high}
      low={weather.low}/>

      <div className="hourly-forecast">
        <h4>  Hourly Forecast </h4>
        {hourlyForecast}
      </div>

    </div>
  )
}

export default Weather;
