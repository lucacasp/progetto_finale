import React from 'react'
import './Navbar.css'
import logo_glassify from '../Assets/logo_glassify.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo_glassify} className='nav-logo' alt="" />
    </div>
  )
}

export default Navbar
