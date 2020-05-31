import React, { Component } from 'react';
import './LocationTempRange.css';
import LocationForm from './LocationForm';


const LocationTempRange = ({ current, high, low }) => {
  return (
    <div className='location-temp-range'>
      <h4> Today's Temperature Ranges </h4>
      <p>Current: {current}</p>
      <p>High: {high}</p>
      <p>Low: {low}</p>
    </div>
  )
}

export default LocationTempRange;
