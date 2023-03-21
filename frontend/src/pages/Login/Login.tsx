import React, {useState} from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";


import { BatmanHome } from "../../assets";
import "./login.css";
import { Link } from "react-router-dom";
import { set } from "mongoose";
const Login = () => {

  const [loginForm , setLoginForm ] = useState({
    email:"",
    password:""
  })


  const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setLoginForm((prevLoginForm)=>{
      const {name , value } = event.target
      return{
        ...prevLoginForm,
        [name]:value
      }
    })
  }













  const handleSubmit =(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    console.log(loginForm)
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
          <h1>Log in</h1>
       
          <div className="field">
            <AiOutlineMail className="input-icon" />

            <input
              type="email"
              autoComplete="off"
              placeholder="Email"
              className="input-field"
              name="email"
              value={loginForm.email}
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
            value={loginForm.password} 
            onChange={handleChange}
            />
          </div>
          <button className="btn-login" type="submit">
            Login
          </button>
          <div >
            <Link to='/SignUp' className="signup-link">Don't have an account? Click here to create account</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
