import React from 'react';
import SunriseSunset from './SunriseSunset';
import HourlyForecast from './HourlyForecast';
import LocationTempRange from './LocationTempRange';
import BookInfo from './BookInfo';
import MovieInfo from './MovieInfo';
import EventInfo from './EventInfo';
import Navbar from './Navbar';

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
  let notificationsKeys = Object.keys(weather.notifications)
  console.log(weather.notifications[0])
  // const eventInfo = Object.values(weather.notifications[0]).map(activity => {
  //   return (
  //     <EventInfo
  //     name={activity.name}
  //     link={activity.url}/>
  //   )
  // })


  return (
    <div>
    <SunriseSunset
    sunrise={Date(weather.sunrise * 1000).split(" ")[4]}
    sunset={Date(weather.sunset * 1000).split(" ")[4]}/>

    {hourlyForecast}

    <LocationTempRange
    current={weather.current}
    high={weather.high}
    low={weather.low}/>

    </div>
  )
}

export default Weather;
