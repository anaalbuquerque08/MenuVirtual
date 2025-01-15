import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';  

function Salgados() {
  const docesInfo = {
    title: "Pizzas",
    description: "Nossos salgadinhos são feitos com receitas caseiras, recheios generosos e todo o cuidado que você merece. Seja coxinha, quibe, esfiha, risole ou qualquer outro favorito, cada unidade é preparada comingredientes frescos e muito carinho.",
    imgHeader: "public/images/salgado-header.png",
  };


  const buttonColors = {
    buttonBackground: 'var(--botao-verde-salgado)',
    buttonHover: 'var(--botao-verde-salgado-hover)',
  };

  const produtos = [
    {
      imagem: 'public/images/salgado1.png',
      titulo: 'Coxinha',
      ingredientes: 'massa de coxinha e frango temperado.',
      quantidade: 'pedido mínimo : 20 unidades',
      valor: 1.5,
    },
    {
      imagem: 'public/images/salgado2.png',
      titulo: 'Kibi',
      ingredientes: 'trigo de kibi e carne moída temperada.',
      quantidade: 'pedido mínimo : 20 unidades',
      valor: 1.5,
    },
    { 
      imagem: 'public/images/salgado3.png',
      titulo: 'Pãozinho Delícia',
      ingredientes: 'pão delicia com recheio de queijo.',
      quantidade: 'pedido mínimo : 20 unidades',
      valor: 1.5,
    }, 
  ];
 
  const rootStyles = getComputedStyle(document.documentElement);
  const tituloCor = rootStyles.getPropertyValue('--fundo-roxo-salgado').trim();  
  const precoBackground = rootStyles.getPropertyValue('--botao-verde-salgado').trim();  
  const tipos = 'Tipos de Salgados';



  return (
    <div style={{ backgroundColor: 'var(--fundo-roxo-salgado)', minHeight: '100vh' }}>
      <Header
        title={docesInfo.title}
        description={docesInfo.description}
        imgHeader={docesInfo.imgHeader}
        imgHeaderStyles={{
          top: '-128px',
          left: '110px',
          width: '205 px',  
      }} 
      buttonColors={buttonColors}
      />  
      
      <Cards 
        produtos={produtos} 
        tituloCor={tituloCor} 
        precoBackground={precoBackground} 
        tipos={tipos} 
      /> 
    </div>
  );
}


export default Salgados;


