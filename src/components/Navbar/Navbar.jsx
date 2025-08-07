import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import leftLogo from '../assets/krishankamla-logo.png';
import rightLogo from '../assets/cmmi-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); // Reset dropdown when menu toggled
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-left" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
  <img src={leftLogo} alt="Company Logo" style={{ height: '65px', width: 'auto' }} />
  <span style={{ fontSize: '23px', fontWeight: 'bold', color: '#333' }}>
    Krishankamla Private Limited
  </span>
</Link>


      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/who">Who We Are</Link></li>
        <li className="dropdown">
          <span>What We Do ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/service1">Service 1</Link></li>
            <li><Link to="/service2">Service 2</Link></li>
          </ul>
        </li>
        <li><Link to="/careers">Careers</Link></li>
        <li><Link to="/participate">Participate</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* Left Sidebar for mobile */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/who" onClick={toggleMenu}>Who We Are</Link></li>
          <li>
            <span onClick={toggleDropdown}>What We Do ▾</span>
            {dropdownOpen && (
              <ul className="mobile-dropdown">
                <li><Link to="/service1" onClick={toggleMenu}>Service 1</Link></li>
                <li><Link to="/service2" onClick={toggleMenu}>Service 2</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/careers" onClick={toggleMenu}>Careers</Link></li>
          <li><Link to="/participate" onClick={toggleMenu}>Participate</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </div>

      <div className="logo-right">
        <img src={rightLogo} alt="CMMI Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
