
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import {FaBars, FaConnectdevelop } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const toggleMObileMenu = () =>{
    setMobileMenuOpen(!isMobileMenuOpen);
  }


  return (
    <nav>
      <div>
        <FaConnectdevelop className="logo" />
      </div>


      <div className={`nav-items ${isMobileMenuOpen ? 'active' : ''}`}>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <div
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to='Services'>Services
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <Link to="/services/full-stack-development">FULL STACK WEB DEVELOPMENT</Link><br/><br/>
                <Link to="/services/app-development">APP DEVELOPMENT</Link><br/><br/>
                <Link to="/services/data-science">DATA SCIENCE</Link><br/><br/>

                <Link to='/services/cloud-computing'>CLOUD COMPUTING</Link><br/><br/>
                <Link to='/services/devops-developer'>DEVOPS</Link><br/><br/>
                <Link to='/services/uiux-design'>UI/UX DESIGN</Link><br/><br/>

                <Link to='/services/dot-net'>DOT NET</Link><br/><br/>
                <Link to='/services/manual-testing'>MANUAL TESTING</Link><br/><br/>
                <Link to='/services/big-data'>BIG DATA</Link><br/><br/>
              </div>
              )} 
          </Link>
        </div>
        

        <Link to="/contact">Contact</Link><br></br>
        <Link to="/Bookseat">View Courses Roadmap</Link>
      </div>

      <div className="right-items ">
        <Link to="/register">Download Carriculum</Link>
      </div>


      <div className="mobile-icon" onClick={toggleMObileMenu}>
        <FaBars />
      </div>
   
    
    </nav>
  
  )
}

export default Navbar;







