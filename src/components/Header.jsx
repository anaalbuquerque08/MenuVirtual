import React from 'react';
import './Header.css'; 
import Button from '../components/Button'; 

function Header({ title, description, imgHeader}) {
  return (
    <div className="Header">
      <div className="Header-image-container">
        <img
          src="public/images/logo.png"
          alt="logo-tudo-gostosinho"
          className="Header-logo"
        />
      </div>
      <div className="Header-text">
        <h1>{title}</h1>
        <p className="descricao">{description}</p>
      </div>
      <div className="doce-image-container">
      <img src={imgHeader} alt="Header decoration" className="doce-image" />
      </div>
       <Button />
    </div>

  );
}

export default Header;
 