import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Search.css'
import Card from '../Card/Card';
function Home() {
  const [movies, setMovies] = useState([]);
  const { type } = useParams();
  const apiKey = '8373bc45584784eb69a771ffff4afac7';
  
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;


  useEffect(() => {
    getMovies();
  }, [type]);

  const getMovies = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div className='eachcard'>
        {movies.map(movie => (
            
          <Card movie={movie}/>
          
        ))}
      </div>
    </>
  );
}

export default Home;
