import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Layout from '../componets/Layout'
import  {Link}  from 'react-router-dom';
import "../CSS/DetailsPage.css"

const DetailPage = () => {
  const {id} =useParams();
 
  const [details, setDetails] = useState({});
  const [suggested, setSuggested] = useState([]);

  async function getDetailsApi() {
    try {
      await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(res => {
          setDetails(res.data.data.movie);  
        })
    } catch (error) {
      console.log(error);
    }
  }
  async function getSuggestedApi(){
    try {
      await fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)
      .then(res=>res.json())
      .then(res=>{
        setSuggested(res.data.movies)
        console.log(res.data.movies)
      })
     
      
    } catch (error) {
      console.log(error);
    }
  } 


  useEffect(() => {
    getDetailsApi();
    getSuggestedApi();
    
    //eslint-disable-next-line
  }, [id])


  return (
    <Layout>
        <div className="movie-card">
                    <img src={details.large_cover_image} alt={details.title}/>
                        <div className="movie-info">
                        <h3>Title ::  {details.title}</h3>
                        <h3>Genre ::  {details.genres}</h3>
                        <h5><span >Description</span>{details.description_full}</h5>
                    </div>
        </div>
        <hr />
         <span className='Suggested-Title'> <h2>Suggested Movies</h2></span>
        <div className="suggested">
          {
           suggested.map(({id,title,medium_cover_image})=>(
            <div key={id} className="card-suggested">
               <Link className='link-color' to={`/details/${id}`}>
               <img src={medium_cover_image} alt={title}/>
              <div className='suggested-title'>
                <h3>{title}</h3>
              </div>
               </Link>
              
            </div>
           ))
          }
        </div>
      
    </Layout >
  )
}

export default DetailPage