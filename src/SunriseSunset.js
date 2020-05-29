import React from 'react';
import './SunriseSunset.css';

const SunriseSunset = ({ sunrise, sunset }) => {
  console.log(sunrise)
  return (
    <div className='sunrise-sunset'>
      <h4> Sunrise and Sunset </h4>
      <p>Sunrise: {sunrise}</p>
      <p>Sunset: {sunset}</p>
    </div>
  )
}

export default SunriseSunset;
