import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({ movie }) => {
  return (
    <div className='movie-detail'>
      <p>{movie}</p>
    </div>
  );
};

export default MovieDetail;
