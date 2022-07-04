import React, { useState, useEffect } from 'react'
import { fetchMovies } from '../services/movies';
import Movie from '../components/Movie';
import { Body, Movies, Search, Menu, Average } from '../styles/styled-components';
import noMovie from '../images/no_movie.jpg'

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState(10);
    
    useEffect(() => {
      fetchMovies()
      .then(data => {
        setMovies(data);
      })
    }, [])

    const search = movies => {
      return movies.filter(m => 
        m.vote_average <= Number(filter) && m.original_title.toLowerCase().includes(query))
    }
    
    const checked = () => {
      if (document.getElementById('one').checked === true) {
        setFilter(2);
      } 
      if (document.getElementById('two').checked === true) {
        setFilter(4)
      }
      if (document.getElementById('three').checked === true) {
        setFilter(6)
      }
      if (document.getElementById('four').checked === true) {
        setFilter(8)
      }
      if (document.getElementById('five').checked === true) {
        setFilter(10)
      }
    }

    return (
        <Body>
          <Search>
            <h1>Your favourite movie. Explained.</h1>
            <h2>Figure out happened. Then find out why.</h2>
            <input 
              type='search' 
              placeholder='Search for a Movie...'
              onChange={e => setQuery(e.target.value.toLowerCase())}
            />
          </Search>
                    
          <div>
            <Movies>
            <Menu>
            <h3><strong>🔥Popular Movies</strong></h3>
            <Average>
                <div>:Rating</div>
                <input onClick={checked} type="checkbox" id='five' value='5'></input>
                <label for="five">★</label>
                <input onClick={checked} type="checkbox" id='four' value='4'></input>
                <label for="four">★</label>
                <input onClick={checked} type="checkbox" id="three" value='3'></input>
                <label for="three">★</label>
                <input onClick={checked} type="checkbox" id="two" value='2'></input>
                <label for="two">★</label>
                <input onClick={checked} type="checkbox" id="one" value='1'></input>
                <label for="one">★</label>
            </Average>
            </Menu>
            {
              search(movies).length ?
              search(movies).map((movie, i) => {
                return(
                <div key={i}>
                  <Movie id={movie.id} poster_path={movie.poster_path} />
                </div>
                )
              }) : <img src={noMovie} alt='not found'/>
            }
            </Movies>
          </div>
        </Body>
    );
  }

export default Home;

