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
      {events}
    </div>
  );
};

export default EventInfo;
