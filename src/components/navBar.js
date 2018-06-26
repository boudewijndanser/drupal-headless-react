import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navBar.css'

const NavBar = () => {
    return (
        
        <ul className="navBar">
          <li className="buttons"><Link to="/movies">Movies</Link></li>
          <li ><Link to="/music">Music</Link></li>
          <li ><Link to="/"><img className="hoppinger" src="/img/hoppinger.svg" alt="Hoppinger logo / home"height="25px"/></Link></li>
          <li ><a href="https://github.com/boudewijndanser/drupal-headless-react"><img className="github" src="/img/github.svg" alt="Github Repo" width="32px"/></a></li>
        </ul>
        
    )
}

export default NavBar