import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home
      <br />
      <Link to="/about">About</Link>
    </div>
  )
}

export default Home
