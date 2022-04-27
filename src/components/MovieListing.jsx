import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getAllMovies, getAllSeries } from '../features/movies/MovieSlice';
import { settings } from './common/Setting';
import Loading from '../images/loading.png';
import MovieCard from './MovieCard';

const MovieListing = () => {
  const { movies, loading } = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  let renderMovies = "";
  renderMovies = movies.Response === "True" ? (
    movies?.Search.map((item, index) => {
      return <MovieCard item={item} key={index} />
    })
  ) : (
    <div>
      {movies.Error}
    </div>
  );
  let renderSeries = "";
  renderSeries = series.Response === "True" ?
    series?.Search.map((item, index) => {
      return <MovieCard item={item} key={index} />
    }
    ) : (
      <div>
        {series.Error}
      </div>
    );

  return (
    <div className='py-6 text-center'>
      {loading ?
        <>
          <div className='grid place-content-center py-8'>
            <img src={Loading} alt="Loading" />
          </div>
        </>
        : <>
          <h1 className='text-3xl text-gradient font-bold my-6'>Latest Movies</h1>
          <div className='text-white'>
            <Slider {...settings} >
              {renderMovies}
            </Slider>
          </div>

          <h1 className='text-3xl text-gradient font-bold my-6 '>Streaming Series</h1>
          <div className='text-white'>
            <Slider {...settings} >
              {renderSeries}
            </Slider>
          </div>
        </>
      }

    </div>
  )
}

export default MovieListing;