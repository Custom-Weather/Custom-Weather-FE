import React from 'react';
import './HourlyForecast.css';

const HourlyForecast = ({ hour, icon, temp, desc}) => {
  return (
    <div className='hourly-forecast'>
      <h4> Hourly Forecast </h4>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
      <p>{hour}</p>
      <p>Current Temp: {temp}</p>
      <p>Description: {desc}</p>
    </div>
  );
};

export default HourlyForecast;
