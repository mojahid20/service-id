import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className='header'>
         <h1>logo</h1>
      <div className="menu">
        <Link to ="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Link to='/friends'>friends</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/restrorant'>meal</Link>
        
      </div>
        </div>
    );
};

export default Header;