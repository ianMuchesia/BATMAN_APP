import React from 'react'
import './card.css'
import { BatmanCreate } from '../../assets'
import { Posts } from '../../@types/posts'

interface Props{
    post:Posts
}
const Card = ({post}:Props) => {
  return (
    <div className="card-container">
          <img src={post.imageUrl} alt="" />
          <div className="image-hover">
            <div className="card-title">
            <h3>{post.name}</h3>
            <h6>{post.prompt}</h6>
            </div>
          </div>
    </div>
  )
}

export default Card