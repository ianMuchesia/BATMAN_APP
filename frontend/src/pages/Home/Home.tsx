import React from 'react'
import { BatmanHome } from '../../assets'
const Home = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${BatmanHome})`
      }}
      className="home"
    ></section>
  )
}

export default Home