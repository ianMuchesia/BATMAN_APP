import React, { ReactElement, useState } from "react";
import { BatmanCreate, preview } from "../../assets";
import "./Create.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/reduxHooks";
import CreateForm from "./CreateForm";
import axios from "axios";
import useSWR from "swr";

const localStorageFetcher = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return null;
  }
};

const Create = () => {

  const navigate = useNavigate();
  const location = useLocation();

    //form data stored in local storage
  const { data: savedForm, error } = useSWR("formData", localStorageFetcher);
 
  const auth = useAppSelector((state) => state.auth);

  const [form, setForm] = useState({
    name: savedForm?.name || "",
    prompt:savedForm?.prompt || "",
    imageUrl: savedForm?.imageUrl || "",
  });

  console.log(form.imageUrl)
  const handlePost = async () => {
    localStorage.setItem("formData", JSON.stringify(form));
    
    if (auth.user === null) {
      navigate(`/Login?redirect=${location.pathname}`);
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/dalle/community",
        form
      );
      if (response.data.msg === "Success!") {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url(${BatmanCreate})`,
      }}
      className="create"
    >
      <div className="create-container">
        <div className="create-title">
          <h1>Create Your Own Batman Images with DALL-E OpenAI</h1>
          <p>
            Bring your imagination to life and generate unique Batman images
            with the power of DALL-E OpenAI API.
          </p>
        </div>
        <CreateForm form={form} setForm={setForm} />
        <div className="share">
          <p>Share your image with the community</p>
          <button onClick={handlePost}>Share With Community</button>
        </div>
      </div>
    </section>
  );
};

export default Create;
