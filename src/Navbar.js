import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const widgets = [
    'SunriseSunset',
    'HourlyForecast',
    'BackgroundImage',
    'LocationTempRange',
    'LocationWelcome',
    'SpotifyPlayer'
  ]

  const widgetList = widgets.map(widget => {
    return (
      <button>{widget}</button>
    )}
  )
  return (
    <div className='side-bar'>
      <h2>Widgets</h2>
      {widgetList}
    </div>
  )
}

export default Navbar;
