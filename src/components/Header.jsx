import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../images/user.png';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from './../features/movies/MovieSlice';

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncSeries(term))
    setTerm('');
  };

  return (
    <div className='flex justify-between px-6 items-center bg-slate-800 h-16'>
      <Link to="/">
        <div className='text-white text-xl font-bold'>Movie App</div>
      </Link>
      <form className='flex justify-center items-center h-10 basis-1/5 overflow-hidden bg-white rounded text-sm' onSubmit={submitHandler}>
        <input type="text" className='h-full outline-none basis-4/5 pl-4' onChange={e => setTerm(e.target.value)} />
        <button className='basis-1/5 text-center bg-gray-100 text-xl h-full hover:bg-gray-200 transition-all duration-200'><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
      <div className='cursor-pointer'>
        <img src={User} alt="User" className='h-12 w-12 object-cover rounded-full' />
      </div>
    </div>
  )
}

export default Header;