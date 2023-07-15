import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Search.css'
import Card from '../Card/Card';

function Search() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=8373bc45584784eb69a771ffff4afac7&query=${id}`;

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  }, [id]);
  console.log(movies)
  return (
    <>
    <div>
    <div className="my">
        <p> Results  for  '{id.trim()}'</p>
    </div>
    {movies.length>0 ? (
        
      <div className='eachcard'>
        {movies.map(movie => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    ) : <div className="my">
        <p>No Results  Found for  '{id.trim()}'</p>
    </div>
    }
    
  </div>
     </> 
  );
}

export default Search;
