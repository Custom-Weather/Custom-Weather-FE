import React from 'react';
import EventDetail from './EventDetail';
import './EventInfo.css';

const EventInfo = ({ notifications }) => {
  const events = Object.values(notifications).map(eventDetail => {
  return(
    <EventDetail
    name={eventDetail.name}
    url={eventDetail.url}/>
  )
})

  return (
    <div className='event-info'>
    <h3> Get out of your comfort zone at an event: </h3>
      {events}
    </div>
  );
};

export default EventInfo;
