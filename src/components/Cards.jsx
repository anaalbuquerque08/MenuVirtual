import React from 'react';
import ProductCard from './ProductCard';  
import './Cards.css'; 

function Cards({ produtos, tituloCor, precoBackground  }) {
  return (
    <div className="cards-container">
      {produtos.map((produto, index) => (
        <ProductCard
          key={index}
          imagem={produto.imagem}
          titulo={produto.titulo}
          ingredientes={produto.ingredientes}
          quantidade={produto.quantidade}
          valor={produto.valor}
          tituloCor={tituloCor}
          precoBackground={precoBackground}
        />
      ))}
    </div>
  );
}

export default Cards;

  
