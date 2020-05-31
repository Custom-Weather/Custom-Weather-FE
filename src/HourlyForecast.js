import React from 'react';
import './HourlyForecast.css';

const HourlyForecast = ({ hour, icon, temp, desc}) => {
  return (
    <div className='hourly-forecast'>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
      <p>{hour}</p>
      <p>Current Temp: {temp}°F</p>
      <p>Description: {desc}</p>
    </div>
  );
};

export default HourlyForecast;
