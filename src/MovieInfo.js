import React from 'react';
<<<<<<< HEAD
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
=======
import './MovieInfo.css';

const MovieInfo = ({ movie }) => {
  return (
    <div className='movie-info'>
      <h4>Check out a flick:</h4>
      <p>{movie}</p>
    </div>
  );
};
>>>>>>> 03fb069ee63b06709a3bd77691d8060741a6ef03

export default MovieInfo;
