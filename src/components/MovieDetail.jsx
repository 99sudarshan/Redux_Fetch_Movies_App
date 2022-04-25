import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSeriesOrMovieDetail, fetchAsyncMovieOrSeriesDetail, removeSelectedMovieOrSeries } from './../features/movies/MovieSlice';

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { imdbID } = useParams();
  const data = useSelector(getSeriesOrMovieDetail);
  console.log(data);

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
          <div className="text-white text-center py-8">...Loading</div>
        ) :
          (
            <div className='flex justify-between items-center p-5'>
              <div className='w-3/4 px-4'>
                <h1 className='text-white text-4xl font-medium tracking-wide'> {data.Title}</h1>
                <div className='py-4 flex items-center gap-5'>
                  <span className='text-sky-500'>
                    IMDB Rating <i className="fa-solid fa-star text-yellow-400"></i> : {data.imdbRating}
                  </span>
                  <span className='text-sky-500'>
                    IMDB Votes <i className="fa-solid fa-thumbs-up text-white"></i> : {data.imdbVotes}
                  </span>
                  <span className='text-sky-500'>
                    Runtime <i className="fa-solid fa-film text-white"></i> : {data.Runtime}
                  </span>
                  <span className='text-sky-500'>
                    Year <i className="fa-solid fa-calendar text-white"></i> :  {data.Year}
                  </span>
                </div>
                <p className='text-white leading-7'>
                  {data.Plot}
                </p>
                <div className='flex flex-col mt-5 gap-1'>
                  <div className='flex items-center'>
                    <span className='text-white basis-[10%]'>
                      Actors
                    </span>
                    <span className='text-sky-500'>
                      {data.Actors}
                    </span>
                  </div>
                  <div className='flex items-center '>
                    <span className='text-white basis-[10%]'>
                      Director
                    </span>
                    <span className='text-sky-500'>
                      {data.Director}
                    </span>
                  </div>
                  <div className='flex items-center '>
                    <span className='text-white basis-[10%]'>
                      Writer
                    </span>
                    <span className='text-sky-500'>
                      {data.Writer}
                    </span>
                  </div>
                  <div className='flex items-center '>
                    <span className='text-white basis-[10%]'>
                      Awards
                    </span>
                    <span className='text-sky-500'>
                      {data.Awards}
                    </span>
                  </div>
                  <div className='flex items-center '>
                    <span className='text-white basis-[10%]'>
                      Genre
                    </span>
                    <span className='text-sky-500'>
                      {data.Genre}
                    </span>
                  </div>
                  <div className='flex items-center '>
                    <span className='text-white basis-[10%]'>
                      Language
                    </span>
                    <span className='text-sky-500'>
                      {data.Language}
                    </span>
                  </div>
                </div >
                <p className='text-pink-500 text-2xl text-center font-medium mt-3'>
                  {`${data.Type === 'movie' ? " In Cinemas" : "Streaming"}`} - {data.Released} onwards
                </p>
              </div>
              <div className='w-3/12'>
                <img src={data.Poster} alt={data.Title} className="w-full" />
              </div>
            </div>
          )
      }

    </>
  )
}

export default MovieDetail;