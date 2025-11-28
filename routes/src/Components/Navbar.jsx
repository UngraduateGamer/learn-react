import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-inner">

        <h2><Link to="/" className='logo'>Your Logo</Link></h2>
        <div className="right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar