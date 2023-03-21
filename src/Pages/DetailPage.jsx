import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Layout from '../componets/Layout'
import "../CSS/DetailsPage.css"

const DetailPage = () => {
  const {id} =useParams();
 
  const [details, setDetails] = useState({});

  async function getApi() {
    try {
      await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(res => {
          setDetails(res.data.data.movie);
         
          
        })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getApi();
    //eslint-disable-next-line
  }, [])


  return (
    <Layout>
       <div className="movie-card">
                    <img src={details.large_cover_image} alt={details.title}/>
                        <div className="movie-info">
                        <h3>Title::  {details.title}</h3>
                        <h5><span >Description</span>{details.description_full}</h5>
                    </div>
            </div>
      
    </Layout >
  )
}

export default DetailPage