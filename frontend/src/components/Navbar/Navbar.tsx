import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {AiOutlineLogin} from 'react-icons/ai'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <ul className='nav-bar'>
        <li>
          <Link to="/"  className='link'>Home</Link>
        </li>
        <div className="navbar-right">
        <li>
          <Link to="Create" className='link'>Create</Link>
        </li>
        <li>
          <Link to="Login" className='link login'><AiOutlineLogin/>Sign in</Link>
        </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar