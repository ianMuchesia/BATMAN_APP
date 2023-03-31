import React, { useState } from "react";
import "./Create.css";
import { randomPrompt } from "../../utils";
import { SurpriseMePrompts } from "../../surpriseMe";
import axios from "axios";


import { Loader } from "../../components";
import { BatmanCreate, preview } from "../../assets";

interface Props {
  form: {
    name: string;
    prompt: string;
    imageUrl: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      prompt: string;
      imageUrl: string;
    }>
  >;
}



const CreateForm = ({ form, setForm }: Props) => {
  //loader
  const [loading, setLoading] = useState(false);

  //form data stored in local storage

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => {
      const { name, value } = e.target;
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };

  //handle the prompts
  const handleRandomPrompt = () => {
    const { prompt } = randomPrompt(SurpriseMePrompts);
    setForm({ ...form, prompt });
  };

  //image loader box
  const displayImage = () => {
    if (loading) {
      return <Loader />;
    } else if (form.imageUrl) {
      return <img src={form.imageUrl} alt="previewing" />;
    } else {
      return <img src={preview} alt="previewing" />;
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/dalle/image",
        {
          name: form.name,
          prompt: form.prompt,
        }
      );
      setForm((prevForm) => {
        return {
          ...prevForm,
          imageUrl: data.imageUrl,
        };
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form-input" onSubmit={handleFormSubmit}>
      <label htmlFor="yourName">Your Name</label>
      <input
        type="text"
        placeholder="enter your name here"
        className="input-name"
        id="yourName"
        name="name"
        value={form.name}
        onChange={handleFormChange}
      />
      <div className="prompt-container">
        <label htmlFor="prompt">Prompt</label>

        <button type="button" onClick={handleRandomPrompt}>
          Surprise Me!
        </button>
      </div>
      <input
        type="text"
        id="prompt"
        className="prompt-input"
        name="prompt"
        value={form.prompt}
        onChange={handleFormChange}
      />

      <div className="generate-image">{displayImage()}</div>
      <button className="generate">Generate</button>
    </form>
  );
};

export default CreateForm;
