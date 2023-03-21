import React from 'react'
import {BsPersonCircle} from 'react-icons/bs'
import './Profile.css'
import { BatmanCreate } from '../../assets'
const Profile = () => {
  return (
    <section className='section-profile'>
      <div className="profile-details">
      <BsPersonCircle className='profile-icon'/>
        <h3 className="profile-name">
          Msodoki Mwanza Mwanza
        </h3>
      </div>
      <h1>Prompts</h1>
      <div className="profile-posts">
        
        <div className="prompt-card">
        <img src={BatmanCreate}/>
        <h3>Prompts</h3>
        </div>
      </div>
    </section>
  )
}

export default Profile