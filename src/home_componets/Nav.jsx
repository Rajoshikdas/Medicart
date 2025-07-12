import React from 'react'
import { useState } from 'react';
import './home.css'

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
  return (
    <>
              <div className='nav'>
        <span>Medikart</span>

        {/* Hamburger Icon */}
        <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navigation Routes */}
        <div className={`navRoute ${menuOpen ? 'open' : ''}`}>
          <button className='navbtn'>Home</button>
          <button className='navbtn'>Appointments</button>
          <button className='navbtn'>Dashboard</button>
          <button className='navbtn logout-design'>Logout</button>
        </div>
      </div>
    </>
  )
}

export default Nav