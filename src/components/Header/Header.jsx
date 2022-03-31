import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink.jsx';

const Header = () => {
    return (
      <div>
        <nav>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink to="/friends">Friends</CustomLink>
        </nav>
      </div>
    );
};

export default Header;