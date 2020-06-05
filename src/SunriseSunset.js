import React from 'react';
import './SunriseSunset.css';
import sunriseImg from './images/sunrise-2.png'
import sunsetImg from './images/sunset.png'

const SunriseSunset = ({ sunrise, sunset }) => {
  console.log(sunrise)
  return (
    <div className='sunrise-sunset'>
    <img id='sunrise-img' alt='sunrise-image' src={sunriseImg}></img>
    <p className='sunrise-text'>{sunrise}</p>
    <img id='sunset-img' alt='sunset-image' src={sunsetImg}></img>
    <p className='sunset'>{sunset}</p>
    </div>
  )
}

export default SunriseSunset;
