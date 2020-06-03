import React from 'react';
import './BookInfo.css';

const BookInfo = ({ book }) => {
  return (
    <div className='book-info'>
      <h4> Read a book for once in your life: </h4>
      <p>{book}</p>
    </div>
  )
}

export default BookInfo;
