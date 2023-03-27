import React, { useState } from "react";
import "./signup.css";
import { BatmanHome } from "../../assets";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setLogin } from "../../store/authSlice";
import {
  displayError,
  displayLoading,
  displaySuccess,
  displayWarning,
} from "../../store/toastSlice";
import { Toast, toastProps } from "../../@types/toast";

interface Props{
  toastDetails:Toast
}
const SignUp = ({toastDetails}:Props) => {
  const dispatch = useAppDispatch();
  
 
  const navigate = useNavigate();
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prevsignUpForm) => {
      const { name, value } = event.target;
      return {
        ...prevsignUpForm,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!signUpForm.email || !signUpForm.name || !signUpForm.password) {
     
      toast.warning('please fill all the fields')
      return;
    }
     const toastID = toast.loading("loading...");
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/dalle/register",
        signUpForm
      );

      console.log(data);
      
      dispatch(displaySuccess("Signed in"))
      console.log(toastDetails)
      toast.update(toastID,toastDetails);
      localStorage.setItem("userToken", JSON.stringify(data));

      dispatch(
        setLogin({
          user: data.user.name,
        })
      );
      navigate("/");
    } catch (error: any) {
      console.log(error);
      
       dispatch(displayError(error.response.data.msg))
      console.log(toastDetails)
toast.update(toastID,toastDetails)
      
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url(${BatmanHome})`,
      }}
      className="login-section"
    >
      <ToastContainer />
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

            <input
              type="Password"
              autoComplete="off"
              className="input-field"
              placeholder="Password"
              name="password"
              value={signUpForm.password}
              onChange={handleChange}
            />
          </div>
          <button className="btn-login" type="submit">
            Sign Up
          </button>
          <div>
            <Link to="/Login" className="signup-link">
              Have an account? Click here Log in
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
