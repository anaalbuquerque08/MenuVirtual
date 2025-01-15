import React from 'react';
import ProductCard from './ProductCard';  
import './Cards.css'; 

function Cards({ produtos, tituloCor, precoBackground , tipos  }) {
  return (
    <div className="cards-container">
      <h3 className='tipos'>{tipos}</h3>
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
          tipos={tipos} 
        />
      ))}
    </div>
  );
}

export default Cards;

  
  
