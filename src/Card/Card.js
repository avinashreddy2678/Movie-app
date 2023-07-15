import React, { useState } from 'react'
import './Card.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { add,remove } from '../Store/MovieSlice';
import BookmarkIcon from '@mui/icons-material/Bookmark';
function Card({movie}) {
  const [inlist,setinlist]=useState(true);
  const dispatch=useDispatch();
  const selector=useSelector(state=>state.movie);
  console.log(selector);

  const navigate=useNavigate();
  const posterWidth = 323; 
  const posterHeight = 450;
  const defaultWidth = 300;
  const defaultHeight = 300;
  const imgurl=movie.poster_path?`https://image.tmdb.org/t/p/original${movie.poster_path}`:'https://cinemate1001.netlify.app/static/media/backup.e70252f8aea393e02447.jpg '
  const width=movie.poster_path?posterWidth : defaultWidth;
  const height=movie.poster_path?posterHeight:defaultHeight;
  

  const hanleclick=()=>{
    let id=movie.id;
       navigate(`/movie/${id}`);
  };
  const removemovie=(movie)=>{
        dispatch(remove(movie));
  }
  const addmovie=()=>{
        dispatch(add(movie));
  }

  useEffect(()=>{
    const productIsInCart=selector.find(cartItem => cartItem.id === movie.id )
    if(productIsInCart){
      setinlist(true);
      }
      else{
        setinlist(false);
      }
  },[selector,movie.id])


  return (
    <>
        <div className="card_container">
            <div className="cardimg">
                <img src={imgurl} width={width} height={height} alt="" onClick={hanleclick}/>
            </div>
            <div className="cardtitle">
                  {movie.original_title}
            </div>


            <div className='mywishandrating'>
                <div className="movierating">
                <svg aria-hidden="true" className="star" fill="orange"  xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          {movie.vote_average} <span className='dot'> {movie.vote_count} reviews</span>
                </div>
         
            <div className="button">
             {inlist?<button style={{border:'none',outline:'transparent'}} onClick={()=>{removemovie(movie)}}><BookmarkIcon style={{color:'#718096'}}/></button>
             :<button style={{border:'none'}} onClick={()=>{addmovie(movie)}}><BookmarkIcon style={{color:'white'}}/></button>} 
            </div>
            </div>



            <div className="overview">
                <p>{movie.overview}</p>
            </div>
        </div>
    </>
  )
}

export default Card
