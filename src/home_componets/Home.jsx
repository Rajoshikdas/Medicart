import React from 'react'
import './home.css'
const Home = () => {
  return (
    <>
    <div className='nav'>
        <span>Medikart</span>
        <div>
            <input type="text" placeholder='Search' />
            <button className='navbtn searchbtn'>Search</button>
        </div>
        <div className='navRoute'>
            <button className='navbtn'>Home</button>
            <button className='navbtn'>Appoinments</button>
            <button className='navbtn'>Dashboard</button>
        </div>
    </div>
    <div className='homeBanner'>
        <div className="appointment_booking">
            <div>Book an appoinment with our doctors.</div>
            <button className='bannerbtn'>Book</button>
        </div>
        <div className="home-f">
            <img src="" alt="" />
        </div>
    </div>
    </>
  )
}

export default Home