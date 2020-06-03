import React from 'react';
import './EventInfo.css';

const EventInfo = ({ name, link }) => {
  return (
    <div className='event-info'>
      <h4> Get out of your comfort zone and go to an event: </h4>
      <p><a href="link"> name</a></p>
    </div>
  );
};

export default EventInfo;
