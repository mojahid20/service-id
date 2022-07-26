import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className='header'>
         <h1>logo</h1>
      <div className="menu">
        <a href="/">home</a>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>
        </div>
    );
};

export default Header;