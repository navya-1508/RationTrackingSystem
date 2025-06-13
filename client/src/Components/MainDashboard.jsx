import React from 'react'
import './MainDashboard.css'; // Ensure you have a CSS file for styling
import Logo from '../assets/logo.png'; // Adjust the path as necessary
export default function MainDashboard() {
  return (
    <div className='main-dashboard'>
    <header className='main-header' style={{ color: 'black', padding: '10px'}}>
        <img src={Logo} alt='Logo' style={{ height: '50px', marginRight: '20px' }} className='logo'/>
        <ul>
            <li><a href="/login">Login</a></li>
            <li><a className="signup" href="/signup">Sign Up</a></li>
        </ul>
    </header>
    <div className='main-content'>
      <div className="main-message">
    <h2>Empowering Communities, One Ration at a Time</h2>
  <p>
    We empower families of children undergoing chronic treatment through timely support,
     smart ration management, and compassionate care.
  </p>
      </div>
    </div>
    <footer className='main-footer' style={{ textAlign: 'center', padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <p>&copy; 2023 Your Organization</p>  
      </footer>
    </div>
  )
}
