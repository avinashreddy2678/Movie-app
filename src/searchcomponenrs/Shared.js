import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Search.css'
import Card from '../Card/Card';
function Shared() {
  const [movies, setmovies] = useState([]);
  const { type } = useParams();
  const apiKey = '8373bc45584784eb69a771ffff4afac7';
  const baseUrl = 'https://api.themoviedb.org/3/movie';
  const url = `${baseUrl}/${type }?api_key=${apiKey}`;

  useEffect(() => {
    getMovies();
  }, [type]);

  const getMovies = () => {
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setmovies(data.results);
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

export default Shared;
