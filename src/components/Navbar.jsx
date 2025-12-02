import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <>
        <div className='navbar bg-[#0d093c66] text-white flex justify-between items-center p-5'>
          <div className="logo">Logo</div>
          <div className='items'>
            <ul className='md:flex gap-10 hidden'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className='toggle md:hidden block' onClick={() => setToggle(!toggle)}>
            <Menu />
          </div>
        </div>

        <div className={` ${toggle ? "block" : "hidden"} mobile-navbar bg-[#0d093c66] text-white text-center`}>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
        </div>
    </>
  )
}

export default Navbar
