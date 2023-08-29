import React from 'react'
import logo from './netflixlogo.png'
const Rooter = () => {
  return (
    <div className='bg-red-800 h-[200px] shadow-lg shadow-red-500/50'>
        <img src={logo} alt="" className='w-screen h-[200px] justify-center' />
    </div>
  )
}

export default Rooter