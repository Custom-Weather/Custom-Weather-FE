import React from 'react';
import BookDetail from './BookDetail';
import './BookInfo.css';

const BookInfo = ({ notifications }) => {
  const books = Object.values(notifications.books).map(bookDetail => {
    return(
      <BookDetail
      book={bookDetail}/>
    )
  })

  return (
    <div className='book-info'>
    <h3> Read a book for once: </h3>
      <p>{books}</p>
    </div>
  )
}

export default BookInfo;
