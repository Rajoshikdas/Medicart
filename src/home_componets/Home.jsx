import React, { useState } from 'react';
import './home.css';
import Shop from './shop';

const Home = () => {
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

      <div className='homeBanner'>
        <div className="appointment_booking">
          <div>Book an appointment</div>
          <div>with our doctors.</div>
          <button className='bannerbtn'>Book</button>
        </div>
        <div className="home-f">
          <img src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" alt="bannerimg" />
        </div>
      </div>

      <Shop />
    </>
  );
};

export default Home;
