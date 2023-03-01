import React from 'react'
import { BatmanCreate, preview } from '../../assets'
import './Create.css'
const Create = () => {
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
<form className='form-input'>
  <label htmlFor='yourName'>
    Your Name
  </label>
  <input type="text"
    placeholder='ian'
    className='input-name'
    id='yourName'
  />
  <div className='prompt-container'>
  <label htmlFor="prompt">
    Prompt
  </label>
  
  <button type='button'>Surprise Me!</button>
  </div>
  <input type="text"
  id='prompt'
  className='prompt-input' />

  <div className="generate-image">
    <img src={preview} alt="previewing" />
  </div>
  <button className='generate'>Generate</button>
  
</form>
<div className="">
<p>Share your image with the community</p>
<button>Share With Community</button>
</div>

    </div>
  </section>
  )
}

export default Create