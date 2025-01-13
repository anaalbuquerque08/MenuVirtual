import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards'; 
function Salgados() {
  return (
    <div style={{ backgroundColor: 'var(--fundo-verde-doce)', minHeight: '100vh' }}>
       <Header title="Salgadinhos" />
       <Cards title="Salgadinhos" />
    </div>
  );
}

export default Salgados;  