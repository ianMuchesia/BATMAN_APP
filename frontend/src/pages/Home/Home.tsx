import React, {useState} from 'react'
import { BatmanHome } from '../../assets'
import './Home.css'
import useSWR from 'swr'
import axios from 'axios'
import { Card, Spinner } from '../../components'
import { Posts } from '../../@types/posts'
import { useAppSelector } from '../../hooks/reduxHooks'
import { Auth } from '../../@types/Auth'

const fetcher = (url:string) => axios.get(url).then(res => res.data)

const Home = () => {

  const auth = useAppSelector(state=>state.auth)
  const [posts , setPosts] = useState<Posts[]>([])


const { error, isLoading} = useSWR<Posts[]>('http://localhost:3000/api/v1/dalle/posts', fetcher, {
  onSuccess: (data:Posts[])=>{
    setPosts(data)
  }
})




  return (
    <section
      style={{
        backgroundImage: `url(${BatmanHome})`
      }}
      className="home"
    >
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to Batman</h1>
          <p className='welcome-text'>
            Batman is a game where you can play a game of batman.
          </p>
         
          {
            isLoading?<Spinner/> :(
              <div className="cards-container">
                {posts && posts.map(post=><Card  key={post._id} post={post}/>)}
              </div>
            )
            

          }
        
          
      </div>
      </div>
     
    </section>
  )
}

export default Home