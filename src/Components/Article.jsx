import React from 'react'
const Article = ({handleCLick, searchMovies, setSearchMovies}) => {
  return (
    <div>
<div className="h-[60vh] bg-gradient-to-r from-black to-red-800 flex md:grid md:grid-cols-1">
  <div className='text-center mt-10 md:mt-20 md:ml-10 md:mr-10'>
    <h2 className='text-white text-xl md:text-4xl'>Unlimited Movies, TV</h2>
    <h2 className='text-white text-xl md:text-4xl'>Shows and more</h2>
    <h4 className='text-white text-sm md:text-lg mt-2'>watch anywhere, Cancel anytime</h4>
    <h4 className='text-white mt-2'>Search Here for more entertaining blockbuster movies</h4>

    <div className="mt-2">
      <input
        type='text'
        placeholder='Search movies'
        className='shadow-lg shadow-red-500/50 h-8 md:w-[400px] w-full px-2'
        value={searchMovies}
        onChange={(e) => setSearchMovies(e.target.value)}
      />
      <button className='hover:bg-red-800 text-white h-8 w-20 md:w-32 mt-2 md:ml-2' onClick={handleCLick}>Search</button>
    </div>
  </div>
</div>


    </div>
      
  )
}

export default Article