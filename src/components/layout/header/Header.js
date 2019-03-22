import React from 'react';
import Logo from './my_clip.png';
import './Header.css';

function Header() {
  return (
     <header style={headerStyle}>
       <img src={Logo} alt="Logo"></img>
     </header>
  )
}

const headerStyle = {
  background: 'green',
  color: '#fff',
  textAlign: 'center',
  padding: '5px',
}

export default Header;