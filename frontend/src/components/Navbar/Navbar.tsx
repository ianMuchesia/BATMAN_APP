import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <ul className='nav-bar'>
        <li>
          <Link to="/"  className='link'>Home</Link>
        </li>
        <li>
          <Link to="Create" className='link'>Create</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar