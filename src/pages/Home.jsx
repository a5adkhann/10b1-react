import React from 'react'
import { Link } from 'react-router-dom'
import Test from '../components/Test'
import Slideshow from '../components/Slideshow';

const Home = () => {

  const user = "Ali";

  return (
    <div>
      <Slideshow/>

      <br />

      <Test abc = {user}/>
    </div>
  )
}

export default Home
