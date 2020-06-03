import React from 'react';
<<<<<<< HEAD
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
=======
import './EventInfo.css';

const EventInfo = ({ name, link }) => {
  return (
    <div className='event-info'>
      <h4> Get out of your comfort zone and go to an event: </h4>
      <p><a href="link"> name</a></p>
>>>>>>> 03fb069ee63b06709a3bd77691d8060741a6ef03
    </div>
  );
};

export default EventInfo;
