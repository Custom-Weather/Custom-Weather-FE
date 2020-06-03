import React from 'react';
import MovieDetail from './MovieDetail';
import './MovieInfo.css';

const MovieInfo = ({ notifications }) => {
  const movies = Object.values(notifications.movies).map(movieDetail => {
    return(
      <MovieDetail
      movie={movieDetail}/>
    )
  })

  return (
    <div className='movie-info'>
      <p>{movies}</p>
    </div>
  )
}

export default MovieInfo;
