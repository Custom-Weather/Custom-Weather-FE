import React from 'react';
import BookInfo from './BookInfo'
import MovieInfo from './MovieInfo'
import EventInfo from './EventInfo'
import './Notifications.css';

const Notifications = ({ notifications, props }) => {
  console.log(props)
  const notificationsKeys = Object.keys(notifications)
  let notificationValues = Object.values(notifications)
  const events = (Object.keys(notifications).length === 5)
  const booksMovies = (Object.keys(notifications).length === 2)

  if (notificationsKeys.length === 2) {Object.values(notifications.books).map(bookDetail => {
    return(
      <BookInfo
      book={bookDetail}/>
    )
  })}

  return (
    <div>
    
    <EventInfo notifications={notifications}/>
    <BookInfo notifications={notifications}/>
    </div>
  )
}

export default Notifications;
