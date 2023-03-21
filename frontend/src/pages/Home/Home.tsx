import React from 'react'
import { BatmanHome } from '../../assets'
import './Home.css'
import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url:string) => axios.get(url).then(res => res.data)

const Home = () => {

const {data, error, isLoading} = useSWR('http://localhost:3000/api/v1/dalle', fetcher)

if(isLoading){
  console.log(true)
}else{
  console.log(data)
}

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
          <p>
            Batman is a game where you can play a game of batman.
          </p>
  
      </div>
      </div>
    </section>
  )
}

export default Home