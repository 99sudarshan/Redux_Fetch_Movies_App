import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSeriesOrMovieDetail, fetchAsyncMovieOrSeriesDetail, removeSelectedMovieOrSeries } from './../features/movies/MovieSlice';

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const data = useSelector(getSeriesOrMovieDetail);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrSeriesDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrSeries());
    }
  }, [dispatch, imdbID]);

  return (
    <>
      {
        Object.keys(data).length === 0 ? (
          <div className="text-white text-center py-12">...Loading</div>
        ) :
          (
            <div className='flex flex-col justify-center pt-12 pb-2 lg:flex-row lg:justify-between items-center flex-wrap sm:p-5'>
              <div className='w-3/4 px-4'>
                <h1 className='text-white text-xl sm:text-4xl font-medium tracking-wide'> {data.Title}</h1>
                <div className='py-4 flex flex-wrap items-center gap-5'>
                  <span className='text-sky-500 text-sm sm:text-base'>
                    IMDB Rating <i className="fa-solid fa-star text-yellow-400"></i> : {data.imdbRating}
                  </span>
                  <span className='text-sky-500 text-sm sm:text-base'>
                    IMDB Votes <i className="fa-solid fa-thumbs-up text-white"></i> : {data.imdbVotes}
                  </span>
                  <span className='text-sky-500 text-sm sm:text-base'>
                    Runtime <i className="fa-solid fa-film text-white"></i> : {data.Runtime}
                  </span>
                  <span className='text-sky-500 text-sm sm:text-base'>
                    Year <i className="fa-solid fa-calendar text-white"></i> :  {data.Year}
                  </span>
                </div>
                <p className='text-white text-sm sm:text-base leading-7'>
                  {data.Plot}
                </p>
                <div className='flex flex-col mt-5 gap-1'>
                  <div className='flex items-center flex-col sm:flex-row flex-wrap'>
                    <span className='text-white basis-[10%]'>
                      Actors
                    </span>
                    <span className='text-sky-500 text-sm sm:text-base'>
                      {data.Actors}
                    </span>
                  </div>
                  <div className='flex items-center flex-col sm:flex-row flex-wrap '>
                    <span className='text-white basis-[10%]'>
                      Director
                    </span>
                    <span className='text-sky-500 text-sm sm:text-base'>
                      {data.Director}
                    </span>
                  </div>
                  <div className='flex items-center flex-col sm:flex-row flex-wrap '>
                    <span className='text-white basis-[10%]'>
                      Writer
                    </span>
                    <span className='text-sky-500 text-sm sm:text-base'>
                      {data.Writer}
                    </span>
                  </div>
                  <div className='flex items-center flex-col sm:flex-row flex-wrap '>
                    <span className='text-white basis-[10%]'>
                      Awards
                    </span>
                    <span className='text-sky-500 text-sm sm:text-base'>
                      {data.Awards}
                    </span>
                  </div>
                  <div className='flex items-center flex-col sm:flex-row flex-wrap '>
                    <span className='text-white basis-[10%]'>
                      Genre
                    </span>
                    <span className='text-sky-500 text-sm sm:text-base'>
                      {data.Genre}
                    </span>
                  </div>
                  <div className='flex items-center flex-col sm:flex-row flex-wrap '>
                    <span className='text-white basis-[10%]'>
                      Language
                    </span>
                    <span className='text-sky-500 text-sm sm:text-base'>
                      {data.Language}
                    </span>
                  </div>
                </div >
                <p className='text-pink-500 text-xl sm:-2xl text-center font-medium my-5 lg:mt-3'>
                  {`${data.Type === 'movie' ? " In Cinemas" : "Streaming"}`} - {data.Released} onwards
                </p>
              </div>
              <div className='w-3/12'>
                <img src={data.Poster} alt={data.Title} className="w-full object-cover" />
              </div>
            </div>
          )
      }

    </>
  )
}

export default MovieDetail;