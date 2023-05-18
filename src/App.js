import React, { useEffect, useState } from 'react'
import './style.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=1a041397'
const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const searchMovie = async(title) =>{
    const response= await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  }
  useEffect(()=>{
  searchMovie('Money Heist');
  },[])
  return (
    <div className='app'>
      <h1>MovieStore</h1>
      <div className="search">
        <input 
        placeholder='Search movie'
        value={search}
        onChange={(e)=>setSearch(e.target.value)} />
        <img 
        src={SearchIcon} alt="search" onClick={()=>searchMovie(search)} />
      </div>
    {
      movies?.length>0 ? (
        <div className="container">
          {movies.map((movie)=>(
              <MovieCard movie={movie}/>
          ))}
      </div>
      ): (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )
    }

      
    </div>
  );
};

export default App;
/* Outcomes: 
  1. in useState bracket:Use array when you want to represent a group of data;Use empty string when you want to represent a term
*/