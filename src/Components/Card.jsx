import React from 'react'

const Card = ({movie}) => {
  return (
    <div className='scale-100 shadow-lg shadow-red-500/50 mt-20 hover:scale-125'>
      <img src={movie.backgroundImage.url} alt='' className='shadow-xs shadow-white h-[290px]  '/>
      <p className='text-white text-center text-2xl '>{movie.title}</p>
      <p className='text-white  text-center text-2xl text-black hover:text-white'>releaseYear : {movie.releaseYear}</p>
      <p className='text-white text-center text-2xl gap-10 text-black hover:text-white'> rating:{movie.maturity.rating.boardId}</p>
      {/* <div className="flex justify-evenly">
      <p className='text-white  text-center text-sm font-bold'>Release Year:</p>
      </div>
      <div className="flex justify-evenly">
      <p className='text-white  text-center text-sm font-bold'>Movie Rating:</p>
      <p className='text-white text-center text-sm'>{movie.jawSummary.maturity.rating.boardId}</p>
      </div> */}
      </div>
  )
}

export default Card