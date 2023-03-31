import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import { BatmanHome } from "../../assets";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { set } from "mongoose";
import axios from "axios";

import { Toast, toastProps } from "../../@types/toast";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { displayError, displaySuccess } from "../../store/toastSlice";
import { setLogin } from "../../store/authSlice";

interface Props {
  toastDetails: Toast;
}
const Login = ({ toastDetails }: Props) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prevLoginForm) => {
      const { name, value } = event.target;
      return {
        ...prevLoginForm,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(loginForm);
    if (!loginForm.email || !loginForm.password) {
      toast.warning("please fill all the fields");
      return;
    }
    console.log("i am here number 4");
    const toastID = toast.loading("loading...");
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/dalle/login",
        loginForm
      );

      console.log(data);

      dispatch(displaySuccess("Signed in"));
      console.log(toastDetails);
      toast.update(toastID, toastDetails);
      localStorage.setItem("userToken", JSON.stringify(data));
      const { user, token } = data;
      dispatch(
        setLogin({
          user: user.name,
          token,
        })
      );
      navigate("/");
    } catch (error: any) {
      console.log(error);
      dispatch(displayError(error.response.data.msg));
      console.log(toastDetails);
      toast.update(toastID, toastDetails);
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

            <input
              type="Password"
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
          <div>
            <Link to="/SignUp" className="signup-link">
              Don't have an account? Click here to create account
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
