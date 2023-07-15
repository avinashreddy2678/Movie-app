import React from 'react'
import './Wishlist.css'
import { useSelector } from 'react-redux'
import Card from '../Card/Card';
function Wishlist() {
    const movieselector=useSelector(state=>state.movie);
    
  return (
    <>
    
    <div className="wishlisttitle">
        <h1>My Movies</h1>
    </div>
    <div className='eachcard'>
       {movieselector.map((movies)=>(
        <Card movie={movies}/>
       ))}
    </div></>
  )
}

export default Wishlist
