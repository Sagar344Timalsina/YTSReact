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

  }, [inputValue])



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
          movies.map((m) => (
            <div key={m.id} className="card-movie">
              <Link to={`/details/${m.id}`}>
              <div className="img-card" >
                <img src={m.medium_cover_image} alt={m.title}/>
              </div>
              <div className="title-card" style={{fontSize:"18px",color:"#fff"}}>{m.title}</div>
              <div className="title-card" style={{color:"#f5c77e", fontWeight:"700"}}>{m.rating}</div>
              </Link>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default HomePage