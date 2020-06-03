import React from 'react';
import './BookDetail.css';

const BookDetail = ({ book }) => {
  return (
    <div className='book-detail'>
      <p>{book}</p>
    </div>
  );
};

export default BookDetail;
