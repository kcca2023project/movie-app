import React from 'react'
import logo from './netflixlogo.png'
const Nav = () => {
  return (
    <nav className='bg-black flex justify-between h-[50px]'>
        <img src={logo} alt="" className='w-[60px] h-[40px]' />
        <ul className=' text-white flex gap-6 py-3 px-3 underline decoration-4  decoration-black hover:decoration-red-800'>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Recently Added</li>
            <li>My List</li>
        </ul>
    </nav>
  )
}

export default Nav