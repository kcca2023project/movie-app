import React, {useEffect, useState} from'react'
import Card from './Card';



const Moviesec = () => {
  const [movies, setmovies] = useState([])
async function fetchmovies () {
  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '56b974b8f8msh0acdea305d98d4fp122704jsn3584972b4330',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url,options);
    const data = await response.json();
    setmovies(data.titles)
    console.log(data)
    
  } catch (error) {
    console.error(error);
  }
}
useEffect (() => {
fetchmovies()
}, [])
console.log(movies)
  return<div className='grid bg-black gap-3 grid-cols-1  md:grid-cols-4 '>
    {movies?.map(movie => (
      <Card movie={movie} />
     ))}
  </div>
}

export default Moviesec;