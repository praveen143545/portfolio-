import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header">
      <ul>
      <Link to="/home"><li>Home</li></Link>
        <Link to="/"><li>About</li></Link>
        
        <Link to="/project"><li>Project</li></Link>
        <Link to="/contact"><li>Contact</li></Link>


        
      </ul>
    </div>
  );
};

export default Header;
