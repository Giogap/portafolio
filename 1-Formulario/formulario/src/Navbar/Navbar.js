import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <a href='/' className='title'>Home-Formulario</a>
      <ul>
        <li>
          <a href='/' className='home'>Home</a>
        </li>
        <li>
          <a href='/formb' className='formb'>Formulario B</a>
        </li>
        <li>
          <a href='/forma' className='forma'>Formulario A</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
