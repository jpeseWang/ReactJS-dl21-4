import React from 'react';
import './Header.css'; 

function Header(props) {
  return (
    <header className="header-container"> 
      <h1 className="header-title">{props.title}</h1> 
    </header>
  );
}

export default Header;