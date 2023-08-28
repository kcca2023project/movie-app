import React from 'react'

const Card = ({movie}) => {
  return (
    <div className='scale-100'>
      <img src={movie.jawSummary.backgroundImage.url} alt='' className=''/>
      <p className='text-white text-center text-2xl shadow-red-800'>{movie.jawSummary.title}</p>
      {/* <div className="flex justify-evenly">
      <p className='text-white  text-center text-sm font-bold'>Release Year:</p>
      <p className='text-white  text-center text-sm'>{movie.jawSummary.releaseYear}</p>
      </div>
      <div className="flex justify-evenly">
      <p className='text-white  text-center text-sm font-bold'>Movie Rating:</p>
      <p className='text-white text-center text-sm'>{movie.jawSummary.maturity.rating.boardId}</p>
      </div> */}
      </div>
  )
}

export default Card