import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='navbar bg-[#0d093c66] text-white flex justify-between items-center p-5'>
          <div className="logo">Logo</div>
          <div className='items'>
            <ul className='flex gap-10'>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='toggle'>Toggle</div>
        </div>
    </>
  )
}

export default Navbar
