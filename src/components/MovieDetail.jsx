import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { fetchMovies } from '../services/movies';
import { Detail } from '../styles/styled-components';

const MovieDetail = () => {

  const { id } = useParams();
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetchMovies()
    .then(data => {
      setMovies(data);
    })
  },[])
    
  const movie = movies.find(m => m.id === Number(id))
  console.log(movie)
  return (
    <>
      { 
        movie ?
        <Detail>
          <h1>{movie.original_title}</h1>
            <div>
              <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt='img not found' />
            </div>
            <h3>Summary: {movie.overview}</h3>
            <h3>Release Date: {movie.release_date}</h3>
            <h3>Score: {movie.vote_average}</h3>
            <Link to='/'><button>Back to Home</button></Link>
        </Detail>
        : <p>Cargando...</p>
      } 
    </>
  )
}

export default MovieDetail;