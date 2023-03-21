import React from 'react'
import "../CSS/NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {

const navList=[
  {id:1,name:"Home",link:"/"},
  {id:2,name:"All Movies",link:"/allmovies"},
  {id:3,name:"About Us",link:"/about"},
  {id:4,name:"Contact Us",link:"/contact"}
]

  return (
    <div>
        <header className='header-nav'>
            <div className="left-nav">
              <h1>YTS</h1>
            </div>
            <div className="right-nav">
            <ul>
              {
                navList.map((l,id)=>(
                  <li key={id} className="listStyle">
                   <Link to={l.link} style={{color:"#fff"}}>{l.name}</Link> 
                  </li>
                ))
              }
            </ul>
            </div>

        </header>

    </div>
  )
}

export default NavBar