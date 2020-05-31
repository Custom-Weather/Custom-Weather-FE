import React from 'react';
import './BackgroundImage.css';
import thunderstorm from './images/storm.gif'
import rain from './images/rain.gif'
import drizzle from './images/drizzle.gif'
import clear from './images/clear.gif'
import clouds from './images/clouds.gif'
import fog from './images/fog.gif'

const BackgroundImage = ({desc}) => {
  var images = {
    'Rain': rain,
    'Thunderstorm' : thunderstorm,
    'Drizzle' : drizzle,
    'Clear' : clear,
    'Clouds' : clouds
  }

  return (
    <div>
    {Object.keys(images).includes(desc) ?
      <img src={images[desc]} className='background-image'/>
      :
      <img src={fog} className='background-image'/>
    }
    </div>
  );
}

export default BackgroundImage;
