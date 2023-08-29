import React, {useState, useEffect} from 'react'
import Nav from './Components/Nav'
import Body from './Components/Body'
 import Article from './Components/Article'
import Moviesec from './Components/Moviesec'
import Rooter from './Components/Rooter'
const App = () => {
  const [movies, setmovies] = useState([])
  const [searchMovies, setSearchMovies] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(null)
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
    // console.log(data)
    
  } catch (error) {
    console.error(error);
  }
}
useEffect (() => {
fetchmovies()
}, [])

const handleCLick = (e)=>{
  e.preventDefault()

movies.map(movie => {
if(movie.jawSummary['title'].toLowerCase() === searchMovies.toLowerCase())
 setFilteredMovies(movie.jawSummary);
})

}
  return (
    <div>
      <Nav />
      <Body />
      <Article handleCLick={handleCLick} searchMovies={searchMovies} setSearchMovies={setSearchMovies} /> 
       <Moviesec filteredMovies={filteredMovies} movies={movies}/>
       <Rooter />
    </div>
  )
}

export default App