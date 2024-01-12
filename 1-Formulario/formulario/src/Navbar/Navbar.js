import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <a href='/' className='title'>Home-Formulario</a>
      <ul>
        <li>
          <a href='/formb' className='formb'>Formulario B</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
