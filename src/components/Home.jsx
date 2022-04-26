import React, { useEffect } from 'react';
import MovieListing from './MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../features/movies/MovieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const moviesTerm = "marvel";
  const seriesTerm = 'heist';

  useEffect(() => {
    dispatch(fetchAsyncMovies(moviesTerm))
    dispatch(fetchAsyncSeries(seriesTerm))
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  )
}

export default Home;
