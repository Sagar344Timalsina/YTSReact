import React, { useEffect, useState } from 'react'
import "../CSS/HomePage.css"
import Layout from '../componets/Layout'
import axios from "axios";
import { Link } from 'react-router-dom';

const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);

  // const [inputValue, setInputValue] = useState("");
  // console.log(inputValue)
  async function getApi() {
    try {
      await axios.get("https://yts.mx/api/v2/list_movies.json").then(res => {
        setMovies(res.data.data.movies);
        setFilterMovies(res.data.data.movies);
        // console.log(movies);
      })
    }
    catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getApi();
    //eslint-disable-next-line
  }, [])


  //search
  const handleSearch = (e) => {
    const filtered = movies.filter(movie => movie.title.includes(e.target.value));
    console.log("Filtered", filtered);
    setFilterMovies(filtered);
  }
  return (
    <Layout>
      <div className="search-header">
        <h1>This is all Movies</h1>
        <div className="one-header">
          <h3>Search</h3>
          <input type="text"  onChange={handleSearch} />
        </div>
      </div>
      <div className='main-div'>
        {
          filterMovies.map(({ id, title, medium_cover_image, rating }) => (
            <div key={id} className="card-movie">
              <Link to={`/details/${id}`}>
                <div className="img-card" >
                  <img src={medium_cover_image} alt={title} />
                </div>
                <div className="title-card" style={{ fontSize: "18px", color: "#fff" }}>{title}</div>
                <div className="title-card" style={{ color: "#f5c77e", fontWeight: "700" }}>{rating}</div>
              </Link>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default HomePage