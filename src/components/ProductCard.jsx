import React from 'react';
import './ProductCard.css';

function ProductCard({ imagem, titulo, ingredientes, quantidade, valor, tituloCor, precoBackground }) {
  return (
    <div className="product-card">
      <img src={imagem} alt={titulo} className="product-card-image" />
      <div className="product-card-info">
        <h2 className="product-card-title" style={{ color: tituloCor }}>{titulo}</h2>
        <p className="product-card-ingredients">{ingredientes}</p>
        <p className="product-card-quantity">{quantidade}</p>
        <p className="product-card-price"  style={{ backgroundColor: precoBackground }}> R$ {valor.toFixed(2)} </p>
      </div>

    </div>
  );
}

export default ProductCard;

