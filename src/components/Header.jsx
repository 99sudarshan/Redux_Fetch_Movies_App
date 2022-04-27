import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import User from '../images/user.png';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from './../features/movies/MovieSlice';

const Header = () => {
  const [term, setTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter search term!")
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term));
    setTerm("");
  };

  return (
    <div className='flex justify-between px-6 items-center bg-slate-800 h-16 z-20'>
      <Link to="/" >
        <div className='text-white text-lg sm:text-xl font-bold'>Movie App</div>
      </Link>
      <button className='text-white text-lg sm:hidden' onClick={() => setShowSearch(!showSearch)}><i className="fa-solid fa-magnifying-glass"></i></button>
      <form className='hidden sm:flex justify-center items-center h-10 basis-2/5 lg:basis-1/4 overflow-hidden bg-white rounded text-sm' onSubmit={submitHandler} id="form">
        <input type="text" className=' h-full outline-none basis-4/5 pl-4' placeholder='Search Movies or Series' value={term} onChange={e => setTerm(e.target.value)} />
        <button className='basis-1/5 text-center bg-gray-100 text-xl h-full hover:bg-gray-200 transition-all duration-200'><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
      <div className='cursor-pointer'>
        <img src={User} alt="User" className='h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full' />
      </div>
      <form className={`my-2 h-8 flex items-center w-64 absolute z-10 ${showSearch ? "top-16" : "-top-24"} transition-all duration-200 ease-linear rounded overflow-hidden sm:hidden `} onSubmit={submitHandler}>
        <input type="text" className='h-full w-4/5 outline-none text-sm pl-2' value={term} onChange={e => setTerm(e.target.value)} />
        <button className='w-1/5 text-center bg-gray-100 h-full text-sm hover:bg-gray-200 transition-all duration-200' ><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  )
}

export default Header;