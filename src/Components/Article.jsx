import React from 'react'
const Article = () => {
  return (
    <div>
      <div className="h-[68vh] bg-gradient-to-r w-screen from-black to-red-800 flex grid-cols-1  md:grid-cols-4">
      <div className=' text-center mt-60'>
    <h2 className='text-white text-4xl ml-[550px]'>Unlimited Movies, TV </h2>
        <h2  className='text-white ml-[550px] text-4xl'>Shows and , more</h2>
        <h4  className='text-white ml-[550px] text-1xl mt-5'>watch anyehere, Cancel anytime</h4  >
        <h4  className='text-white ml-[550px] mt-5'>Search Here for more entertaining blockbuster movies</h4  >
        <button className='bg-white text-white hover:scale-125 text-start text-1xl  ml-[550px] mt-5 shadow-lg shadow-red-500/50 animate-bounce w-[500px] h-10'> search</button>
        <h2 className='text-1xl ml-[580px] text-white mt-2'>find more about movies of your choice</h2>
        </div>
      </div>
    </div>
      
  )
}

export default Article