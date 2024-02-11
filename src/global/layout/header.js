import React, { useState } from "react";
import logo from '../../assets/Logo.png'
import search from'../../assets/search-outline.png'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/ThemeContext";

const Header = () => {
  const navigate= useNavigate();
  const { isAuthenticated, user, logout}=useAuth();
  
  console.log("Authentication", isAuthenticated, user)
  const LogOut = () => {
    navigate(`/`)
  }
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
        <div className="page_width">
        
          <nav>
          <div className="bar_icon" onClick={toggleMenu}>
          <FaBars />
          </div>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav_link">
              <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                <li><Link to="/home/:id">Home</Link></li>
                <li><Link to="/blogListing">Blog</Link></li>
                <li><Link to="/createBlogPage">Create Blog</Link></li>
                <li><Link to="/authorPage">Contact</Link></li>
                
                {/* {isAuthenticated?<li onClick={logout}><Link>LogOut</Link></li>
                :<li><Link to="/">Login</Link></li>} */}
                
              </ul>
            </div>
            <div className="nav-search">
              <div className='logout'>
              {isAuthenticated? <button type="submit" onClick={logout}>LogOut</button>: <button type="submit" onClick={LogOut}>LogIn</button>}</div>
              
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round light " />
              </label>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round" />
              </label>
            </div> 
          </nav>
        </div>
      </header>

  )
}

export default Header