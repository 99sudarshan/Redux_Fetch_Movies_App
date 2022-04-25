import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 flex flex-col sm:flex-row items-center justify-center gap-1 h-24 py-3'>
      <h1 className='text-2xl sm:text-3xl text-white font-medium '>Movie App</h1>
      <p className='text-white text-sm'>©2022, Movie, .Inc. or its affiliates</p>
    </div>
  )
}

export default Footer;