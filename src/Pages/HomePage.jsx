import React, { useEffect, useState } from 'react'
import "../CSS/HomePage.css"
import Layout from '../componets/Layout'
import axios from "axios";
import { Link } from 'react-router-dom';

const HomePage = () => {
 
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

  async function getApi() {
    try {
      await axios.get("https://yts.mx/api/v2/list_movies.json?quality=3D").then(res => {
        setMovies(res.data.data.movies);
        // console.log(movies);
      })
    }
    catch (error) {
      console.log(error);
    }
  }
// useEffect(()=>{
// getApi();
// },[])

  useEffect(() => {
    if(inputValue===""){
     getApi(); 
     } 
  else{
  const filtered=movies.filter((movie)=>movie.title.includes(inputValue));
  console.log("Filtered",filtered);
  setMovies(filtered);
  }

  }, [inputValue,movies])



  return (
    <Layout>
      <div className="search-header">
      <h1>This is all Movies</h1>
     <div className="one-header">
     <h3>Search</h3>
      <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
     </div>
      </div>
      <div className='main-div'>
        {
          movies.map(({id,title,medium_cover_image,rating}) => (
            <div key={id} className="card-movie">
              <Link to={`/details/${id}`}>
              <div className="img-card" >
                <img src={medium_cover_image} alt={title}/>
              </div>
              <div className="title-card" style={{fontSize:"18px",color:"#fff"}}>{title}</div>
              <div className="title-card" style={{color:"#f5c77e", fontWeight:"700"}}>{rating}</div>
              </Link>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default HomePage