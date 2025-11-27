import React from 'react'
import { Link } from 'react-router-dom'
import Test from '../components/Test'

const Home = () => {

  const user = "Ali";

  return (
    <div>
      Home

      <br />

      <Test abc = {user}/>
    </div>
  )
}

export default Home
