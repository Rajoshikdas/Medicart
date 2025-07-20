import { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false); // for dropdown

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
          <button className='navbtn'><Link to='/' >Home</Link></button>
          <button className='navbtn'><Link to='home/cart'>Cart</Link></button>
          <button className='navbtn'><Link to='home/appoinment'>Appointments</Link></button>

          {/* Dashboard Dropdown */}
          <div className="dashboard-dropdown">
            <button
              className='navbtn'
              onClick={() => setDashboardOpen(!dashboardOpen)}
            >
              Dashboard ▾
            </button>
            {dashboardOpen && (
              <div className="dropdown-options">
                <button className="dropdown-item"><Link to='/DoctorPannel'>Doctor's Dashbord</Link></button>
                <button className="dropdown-item">Admin</button>
                <button className="dropdown-item">Patient</button>
              </div>
            )}
          </div>

          <button className='navbtn logout-design'>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
