import React from 'react'
import {BsPersonCircle} from 'react-icons/bs'
import './Profile.css'
import { BatmanCreate } from '../../assets'
import { Auth } from '../../@types/Auth';
import { useAppSelector } from '../../hooks/reduxHooks';


const Profile = () => {
  const auth = useAppSelector(state=>state.auth)
  return (
    <section className='section-profile'>
      <div className="profile-details">
      <BsPersonCircle className='profile-icon'/>
        <h3 className="profile-name">
          {auth.user}
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