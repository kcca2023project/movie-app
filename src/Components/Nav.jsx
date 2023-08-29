import React from 'react'
import logo from './netflixlogo.png'
const Nav = () => {
  return (
<nav className='bg-black flex flex-wrap md:flex-no-wrap justify-between items-center h-[50px] px-4 md:px-10'>
  <img src={logo} alt="" className='w-[60px] h-[40px]' />
  <ul className='text-white flex flex-col md:flex-row gap-4 md:gap-8 py-3 md:py-0'>
    <li className='text-white hover:text-red-800 font-bold'>TV Shows</li>
    <li className='text-white hover:text-red-800 font-bold'>Movies</li>
    <li className='text-white hover:text-red-800 font-bold'>Recently Added</li>
    <li className='text-white hover:text-red-800 font-bold'>My List</li>
  </ul>
</nav>

  )
}

export default Nav