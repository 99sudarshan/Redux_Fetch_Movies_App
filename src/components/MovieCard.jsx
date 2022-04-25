import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ item }) => {
  return (
    <div className="flex justify-center">
      <Link to={`/movie/${item.imdbID}`} className='rounded-lg shadow-lg bg-white w-96 hover:scale-105 transition-all duration-150 ease-linear'>
        <img className="rounded-t-lg w-full object-cover" src={item.Poster} alt={item.Title} />
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-bold mb-2">{item.Title}</h5>
          <p className="text-gray-900 text-xl font-bold mb-2 bg-red-500 rounded-sm py-3">{item.Year}</p>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard;