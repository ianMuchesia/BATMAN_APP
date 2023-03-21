import React, {useState} from 'react'
import './signup.css'
import { BatmanHome } from '../../assets'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
const SignUp = () => {

  const [signUpForm , setSignUpForm ] = useState({
    name: "",
    email:"",
    password:""
  })


  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setSignUpForm((prevsignUpForm)=>{
      const {name , value } = event.target
      return{
        ...prevsignUpForm,
        [name]:value
      }
    })
  }













  const handleSubmit =(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    console.log(signUpForm)
  }




















  return (
    <section
    style={{
      backgroundImage: `url(${BatmanHome})`,
    }}
    className="login-section"
  >
    <div className="login-section-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>
        <div className="field">
            <BsFillPersonFill className="input-icon" />

            <input
              type="text"
              autoComplete="off"
              placeholder="Name"
              className="input-field"
              name="name"
              value={signUpForm.name}
              onChange={handleChange}
            />
          </div>
        <div className="field">
          <AiOutlineMail className="input-icon" />

          <input
            type="email"
            autoComplete="off"
            placeholder="Email"
            className="input-field"
            name="email"
            value={signUpForm.email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <RiLockPasswordLine className="input-icon" />

          <input type="Password" 
          autoComplete="off" 
          className="input-field"
          placeholder="Password"
          name="password"
          value={signUpForm.password}
          onChange={handleChange} />
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