import React, { Component } from 'react';
import './LocationTempRange.css';
import LocationForm from './LocationForm';


const LocationTempRange = ({ current, high, low }) => {
  return (
    <div className='location-temp-range'>
      <h4> Today's Temperature Ranges </h4>
      <p>Current: {current}°F</p>
      <p>High: {high}°F</p>
      <p>Low: {low}°F</p>
    </div>
  )
}

export default LocationTempRange;
