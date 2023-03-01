import React from 'react'
import { BatmanHome } from '../../assets'
import './Home.css'
const Home = () => {
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