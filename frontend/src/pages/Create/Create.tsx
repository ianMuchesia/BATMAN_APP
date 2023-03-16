import React, { ReactElement, useState } from 'react'
import { BatmanCreate, preview } from '../../assets'
import './Create.css'
import { randomPrompt } from '../../utils'
import { SurpriseMePrompts } from '../../surpriseMe'

const Create = () => {



  const [ form , setForm ] = useState({
    name: "",
    prompt:"",
  })

  const handleFormChange=(e:  React.ChangeEvent<HTMLInputElement>)=>{
    setForm(prevForm=>{
     const {name , value} = e.target
      return{
        ...prevForm,
        [name]: value
      }
    })
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(form)
    
  }




  const handleRandomPrompt=()=>{
      const {prompt} = randomPrompt(SurpriseMePrompts)
      setForm({...form, prompt})
     
  }

  return (
    <section
    style={{
      backgroundImage: `url(${BatmanCreate})`
    }}
    className="create"
  >
    <div className="create-container">
<div className="create-title">
  <h1>
  Create Your Own Batman Images with DALL-E OpenAI
  </h1>
  <p>Bring your imagination to life and generate unique Batman images with the power of DALL-E OpenAI API.</p>
</div>
<form className='form-input' onSubmit={handleFormSubmit}>
  <label htmlFor='yourName'>
    Your Name
  </label>
  <input type="text"
    placeholder='enter your name here'
    className='input-name'
    id='yourName'
    name="name"
    value={form.name}
    onChange={handleFormChange}
  />
  <div className='prompt-container'>
  <label htmlFor="prompt">
    Prompt
  </label>
  
  <button type='button' onClick={handleRandomPrompt}>Surprise Me!</button>
  </div>
  <input type="text"
  id='prompt'
  className='prompt-input'
  name="prompt"
  value={form.prompt}
  onChange={handleFormChange}
   />

  <div className="generate-image">
    <img src={preview} alt="previewing" />
  </div>
  <button className='generate'>Generate</button>
  
</form>
<div className="share">
<p>Share your image with the community</p>
<button>Share With Community</button>
</div>

    </div>
  </section>
  )
}

export default Create