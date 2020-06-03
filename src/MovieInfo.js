import React from 'react';
import './MovieInfo.css';

const MovieInfo = ({ movie }) => {
  return (
    <div className='movie-info'>
      <h4>Check out a flick:</h4>
      <p>{movie}</p>
    </div>
  );
};

export default MovieInfo;
