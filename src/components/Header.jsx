import React from 'react';
import { Link } from 'react-router-dom';
import User from '../images/user.png';

const Header = () => {
  return (
    <div className='flex justify-between px-6 items-center bg-slate-800 h-16'>
      <Link to="/">
        <div className='text-white text-xl font-bold'>Movie App</div>
      </Link>
      <div className='cursor-pointer'>
        <img src={User} alt="User" className='h-12 w-12 object-cover rounded-full' />
      </div>
    </div>
  )
}

export default Header;