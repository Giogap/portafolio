import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <a href='/' className='title'>Home-Login</a>
      <ul>
        <li>
          <a href='/login' className='login'>Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
