import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navBar.css'

const NavBar = () => {
    return (
        <div className="navBar" >
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/music">Music</Link></li>
        </ul>
        </div>
    )
}

export default NavBar