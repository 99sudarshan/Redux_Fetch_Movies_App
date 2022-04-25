import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllSeries } from '../features/movies/MovieSlice';
import MovieCard from './MovieCard';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  let renderMovies = "";
  renderMovies = movies.Response === "True" ? (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-4 my-4' >
      {movies.Search.map((item, index) => {
        return <MovieCard item={item} key={index} />
      })}
    </div>
  ) : (
    <div>
      {movies.Error}
    </div>
  );

  let renderSeries = "";
  renderSeries = series.Response === "True" ? (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 sm:px-4 gap-4 my-4' >
      {series.Search.map((item, index) => {
        return <MovieCard item={item} key={index} />
      })}
    </div>
  ) : (
    <div>
      {series.Error}
    </div>
  );

  return (
    <div className='py-3 text-center'>
      <h1 className='text-3xl text-gradient font-bold my-6'>Latest Movies</h1>
      {renderMovies}
      <h1 className='text-3xl text-gradient font-bold my-6 '>Streaming Series</h1>
      {renderSeries}
    </div>
  )
}

export default MovieListing;