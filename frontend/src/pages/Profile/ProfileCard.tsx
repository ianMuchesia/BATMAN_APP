import React from 'react'
import {MdDeleteForever} from 'react-icons/md';

import { Posts } from '../../@types/posts'
import { useAppSelector } from '../../hooks/reduxHooks';
import axios from 'axios';
interface Props{
    post:Posts;
    headers: {
      Authorization: string;
  };
}
const ProfileCard = ({post, headers}:Props) => {

 

  const handleDeletePost = async()=>{
  /*   const response =  await axios.delete(`http://localhost:3000/api/v1/dalle/userposts/${post._id}`,{headers})
    if(response.data.msg === 'SUCCESS'){

    } */
  }
    
  return (
    <div className="prompt-card" key={post._id}>
              <h3>{post.name}</h3>
              <div className="profile-img-container">
              <img src={post.imageUrl} />
              <MdDeleteForever className='delete-button' onClick={handleDeletePost}/>
              </div>
         
            <h5>{post.prompt}</h5>
          </div>
  )
}

export default ProfileCard