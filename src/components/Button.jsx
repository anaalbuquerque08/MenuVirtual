import React from 'react';
import './Button.css';

function Button({ backgroundColor, hoverColor }) {
  return (
    <button
      className="button"
      style={{
        backgroundColor: backgroundColor, // Define a cor de fundo inicial
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = hoverColor)} // Muda a cor no hover
      onMouseLeave={(e) => (e.target.style.backgroundColor = backgroundColor)} // Retorna à cor original
    >
      Faça seu pedido já!
    </button>
  );
}

export default Button;
