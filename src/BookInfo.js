import React from 'react';
<<<<<<< HEAD
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
      <p>{books}</p>
=======
import './BookInfo.css';

const BookInfo = ({ book }) => {
  return (
    <div className='book-info'>
      <h4> Read a book for once in your life: </h4>
      <p>{book}</p>
>>>>>>> 03fb069ee63b06709a3bd77691d8060741a6ef03
    </div>
  )
}

export default BookInfo;
