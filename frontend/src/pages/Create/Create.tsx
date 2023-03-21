import React, { ReactElement, useState } from 'react'
import { BatmanCreate, preview } from '../../assets'
import './Create.css'
import { randomPrompt } from '../../utils'
import { SurpriseMePrompts } from '../../surpriseMe'
import axios from 'axios'
import { Loader } from '../../components'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  const navigate = useNavigate()


  const [ form , setForm ] = useState({
    name: "",
    prompt:"",
    imageUrl:""
  })
  const [loading , setLoading] = useState(false)

  const handleFormChange=(e:  React.ChangeEvent<HTMLInputElement>)=>{
    setForm(prevForm=>{
     const {name , value} = e.target
      return{
        ...prevForm,
        [name]: value
      }
    })
  }

  const handleFormSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setLoading(true)
    try {
      const {data} = await axios.post('http://localhost:3000/api/v1/dalle/image',{
      name:form.name, prompt:form.prompt
    })
    setForm(prevForm=>{
      return{
        ...prevForm,
        imageUrl:data.imageUrl
      }
    })
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
   
    
    

  }




  const handleRandomPrompt=()=>{
      const {prompt} = randomPrompt(SurpriseMePrompts)
      setForm({...form, prompt})
     
  }
  const displayImage=()=>{
    if(loading){
      return <Loader/>
    }else if(form.imageUrl){
      return <img src={form.imageUrl} alt="previewing" />
    }else{
      return <img src={preview} alt="previewing" />
    }
  }

  const handlePost = async()=>{

    try {
      const response = await axios.post('http://localhost:3000/api/v1/dalle/community', form)
     if(response.data.msg === 'Success!'){
      navigate('/')
     }
     
    } catch (error) {
      console.log(error)
    } 
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
  {displayImage()}
  </div>
  <button className='generate'>Generate</button>
  
</form>
<div className="share">
<p>Share your image with the community</p>
<button onClick={handlePost}>Share With Community</button>
</div>

    </div>
  </section>
  )
}

export default Create