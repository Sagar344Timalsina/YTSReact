import React, { useEffect, useState } from 'react'
import "../CSS/HomePage.css"
import Layout from '../componets/Layout'
import axios from "axios";
import { Link } from 'react-router-dom';

const HomePage = () => {
 
  const [movies, setMovies] = useState();

  async function getApi() {
    try {
      await axios.get("https://yts.mx/api/v2/list_movies.json?quality=3D").then(res => {
        setMovies(res.data.data.movies);
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getApi();
  }, [])


  return (
    <Layout>
      <div className='main-div'>
        {
          movies && movies.map((m) => (
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