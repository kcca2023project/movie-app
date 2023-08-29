import React, {useEffect, useState} from'react'
import Card from './Card';



const Moviesec = ({filteredMovies, movies}) => {

  return<div className='grid bg-black gap-20 grid-cols-1  md:grid-cols-4 '>
   
    {
      filteredMovies != null ? <Card movie={filteredMovies} /> :
    movies?.map(movie => (
      <Card movie={movie.jawSummary} />
     ))}
  </div>
}

export default Moviesec;