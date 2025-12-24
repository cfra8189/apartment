import React from 'react'
import { Link } from 'react-router-dom'
import './ApartmentNavbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
    <nav className="navbar">
      <ul className='nav-list'>
        <li className="nav-item">
          <Link to="." relative="path">Overview</Link>
        </li>
        <li className="nav-item">
          <Link to="floorplan">Floor Plan</Link>
        </li>
        <li className="nav-item">
          <Link to="amenities">Amenities</Link>
        </li>
        <li className="nav-item">
          <Link to="integrated">IN.toGreat('ed')</Link>
        </li>
      </ul>
    </nav>
    </div>
    
  )
}

export default Navbar;