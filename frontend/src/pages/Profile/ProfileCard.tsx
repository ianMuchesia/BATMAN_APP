import React from 'react'
import { Posts } from '../../@types/posts'
interface Props{
    post:Posts;
}
const ProfileCard = ({post}:Props) => {

    
  return (
    <div className="prompt-card" key={post._id}>
              <h3>{post.name}</h3>
            <img src={post.imageUrl} />
            <h5>{post.prompt}</h5>
          </div>
  )
}

export default ProfileCard