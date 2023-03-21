import React from 'react'
import './signup.css'
import { BatmanHome } from '../../assets'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <section
    style={{
      backgroundImage: `url(${BatmanHome})`,
    }}
    className="login-section"
  >
    <div className="login-section-container">
      <form className="login-card">
        <h1>SIGN UP</h1>
        <div className="field">
            <BsFillPersonFill className="input-icon" />

            <input
              type="text"
              autoComplete="off"
              placeholder="Name"
              className="input-field"
            />
          </div>
        <div className="field">
          <AiOutlineMail className="input-icon" />

          <input
            type="email"
            autoComplete="off"
            placeholder="Email"
            className="input-field"
          />
        </div>
        <div className="field">
          <RiLockPasswordLine className="input-icon" />

          <input type="Password" 
          autoComplete="off" 
          className="input-field"
          placeholder="Password" />
        </div>
        <button className="btn-login" type="submit">
          Sign Up
        </button>
        <div >
          <Link to='/Login' className="signup-link">Have an account? Click here Log in</Link>
        </div>
      </form>
    </div>
  </section>
  )
}

export default SignUp