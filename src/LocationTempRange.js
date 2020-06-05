import React, { Component } from 'react';
import './LocationTempRange.css';
import LocationForm from './LocationForm';
import lowTemp from './images/low-temp.png'
import highTemp from './images/high-temp.png'


const LocationTempRange = ({ current, high, low }) => {
  return (
    <div className='location-temp-range'>
      <h1 className='current'> {Math.round(parseFloat(current))}°F</h1>
      <div className='temp-container'>
        <h4 className='high'><img id='high-temp-img' src={highTemp}></img>{Math.round(parseFloat(high))}°F</h4>
        <h4 className='low'><img id='low-temp-img' src={lowTemp}></img>{Math.round(parseFloat(low))}°F</h4>
      </div>
    </div>
  )
}

export default LocationTempRange;
