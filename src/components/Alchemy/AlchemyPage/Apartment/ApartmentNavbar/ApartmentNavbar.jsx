import React from 'react'
import { Link } from 'react-router-dom'
import './ApartmentNavbar.css'
import { useTheme } from '../../../../../contexts/ThemeContext.jsx'

const Navbar = () => {
    const { colors } = useTheme()
  
  return (
    <div className="navbar-container" style={{backgroundColor: colors.background, boxShadow: `0 -4px 12px ${colors.background === '#000000' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.1)'}`}}>
    <nav className="navbar">
      <ul className='nav-list'>
        <li className="nav-item">
          <Link to="." relative="path" style={{color: colors.text}}>Overview</Link>
        </li>
        <li className="nav-item">
          <Link to="floorplan" style={{color: colors.text}}>Floor Plan</Link>
        </li>
        <li className="nav-item">
          <Link to="amenities" style={{color: colors.text}}>Amenities</Link>
        </li>
        <li className="nav-item">
          <Link to="integrated" style={{color: colors.text}}>IN.toGreat('ed')</Link>
        </li>
      </ul>
    </nav>
    </div>
    
  )
}

export default Navbar;