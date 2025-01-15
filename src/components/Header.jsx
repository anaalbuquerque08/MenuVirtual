import React from 'react';
import './Header.css';
import Button from '../components/Button';

function Header({ title, description, imgHeader, imgHeaderStyles, buttonColors }) {
  return (
    <div className="Header">
      <div className="Header-image-container">
        <img
          src="/images/logo.png"
          alt="logo-tudo-gostosinho"
          className="Header-logo"
        />
      </div>



      
      <div className="Header-text">
        <h1>{title}</h1>
        <p className="descricao">{description}</p>
      </div>
      <div className="header-image-container">
        <img
          src={imgHeader}
          alt="Header decoration"
          className="header-image"
          style={imgHeaderStyles}  
        />
      </div>
      <Button
        backgroundColor={buttonColors.buttonBackground}
        hoverColor={buttonColors.buttonHover}  
      />
    </div>
  );
}

export default Header;
 