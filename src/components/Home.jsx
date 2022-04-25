import React, { useEffect } from 'react';
import MovieListing from './MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../features/movies/MovieSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncSeries())
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  )
}

export default Home;
