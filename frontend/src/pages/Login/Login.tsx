import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";


import { BatmanHome } from "../../assets";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BatmanHome})`,
      }}
      className="login-section"
    >
      <div className="login-section-container">
        <form className="login-card">
          <h1>Log in</h1>
       
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
