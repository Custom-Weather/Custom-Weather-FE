import React from 'react';
import './EventDetail.css';

const EventDetail = ({ name, url }) => {
  return (
    <div className='event-detail'>
      <p><a href={url}> {name}</a></p>
    </div>
  );
};

export default EventDetail;
