import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {AiOutlineLogin} from 'react-icons/ai'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import './Navbar.css'
import { useAppSelector } from '../../hooks/reduxHooks'

export const Navbar = () => {
 const auth = useAppSelector(state=>state.auth)
 console.log(auth)
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
        {auth.user? <Link to="Profile" className='link login'><h4><span><BsFillPersonCheckFill/></span>{auth.user}</h4></Link> : <Link to="Login" className='link login'><AiOutlineLogin/>Log in</Link>} 
        </li>
        </div>
      </ul>
    </nav>
  )
}

export const MemoizedNavbar = React.memo(Navbar)