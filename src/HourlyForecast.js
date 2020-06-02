import React from 'react';
import './HourlyForecast.css';

const HourlyForecast = ({ hour, icon, temp, desc}) => {
  return (
    <div className='hourly-forecast'>
      <p>{temp}</p>
      <img id='icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
      <p>{hour}</p>
      <p>{desc}</p>
    </div>
  );
};

export default HourlyForecast;
