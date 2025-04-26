import React, { useEffect, useState } from 'react';
import './style.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=5650cfb';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null); // For error handling

  const searchMovie = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
        setError(null); // Reset error if the API response is valid
      } else {
        setMovies([]); // Clear movies if no results found
        setError(data.Error);
      }
    } catch (error) {
      setError('Failed to fetch data'); // Display error if the request fails
      setMovies([]); // Clear the previous movies
    }
  };

  useEffect(() => {
    searchMovie('Money Heist');
  }, []);

  return (
    <div className="app">
      <h1>MovieStore</h1>
      <div className="search">
        <input
          placeholder="Search movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(search)}
        />
      </div>
      {error ? (
        <div className="error">
          <h2>{error}</h2>
        </div>
      ) : (
        <div className="container">
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
