import React from 'react';
import './SunriseSunset.css';
import sunriseImg from './images/sunrise-2.png'
import sunsetImg from './images/sunset.png'

const SunriseSunset = ({ sunrise, sunset }) => {
  console.log(sunrise)
  return (
    <div className='sunrise-sunset'>
    <p className='sunrise'><img id='sunrise-img' src={sunriseImg}></img>{sunrise}</p>
    <p className='sunset'><img id='sunset-img' src={sunsetImg}></img>{sunset}</p>
    </div>
  )
}

export default SunriseSunset;
