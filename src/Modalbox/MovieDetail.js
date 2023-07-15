import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import './MovieDetail.css'
function MovieDetail() {
  const [movies,setmovies]=useState([]);
  const {detail}=useParams();
  const [geners,setgeners]=useState([]);
  const imgurl=movies.poster_path?`https://image.tmdb.org/t/p/original${movies.poster_path}`:'https://cinemate1001.netlify.app/static/media/backup.e70252f8aea393e02447.jpg '

  useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${detail}?api_key=8373bc45584784eb69a771ffff4afac7&language=en-US`)
      .then(res=>res.json())
      .then(data=>{
        setmovies(data);
        setgeners(data.genres)
      })
  },[detail])
  

  return (
    <>
    <div className="total_content">
        <div className="detailimg">
            <img src={imgurl} alt="" width={370} height={550} />
        </div>
        <div className="detaildescription">
           <div className="detailtitle">
                {movies.title}
           </div>
           <div className="detailoverview">
                {movies.overview}
           </div>
           <div className="generes_button">
           {geners.map(eachgenre => (
             <button>{eachgenre.name}</button> 
  ))}
           </div>
           <div className="reviews">
           <svg aria-hidden="true" className="star" fill="orange"  xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          {movies.vote_average} <span className='dot'> {movies.vote_count} reviews</span>
           </div>
           <div className="otherdetails">
              
                <li>Runtime: <span>{movies.runtime} min</span></li>
                <li>Budget: <span>{movies.budget}</span></li>
                <li>Revenue: <span>{movies.revenue}</span></li>
                <li>Release Date: <span>{movies.release_date}</span></li>
                <li>IMDB Code: <span>{movies.imdb_id}</span></li>
              
           </div>
        </div>
      </div>
    </>
  )
}

export default MovieDetail

