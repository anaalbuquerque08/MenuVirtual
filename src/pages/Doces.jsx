import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';  

function Doces() {
  const docesInfo = {
    title: "Doces de Festa",
    description: "Nossos doces são feitos com ótimos ingredientes e preparados com todo o carinho, garantindo sabor e qualidade. Perfeitos para aniversários, eventos especiais ou  simplesmente para adoçar o seu dia!",
    imgHeader: "public/images/doce-header.png",
  };  
  const buttonColors = {
    buttonBackground: 'var(--botao-rosa-doce)',
    buttonHover: 'var(--botao-rosa-doce-hover)',
  };
  const produtos = [
    {
      imagem: 'public/images/doce-brigadeiro.png',
      titulo: 'Brigadeiro',
      ingredientes: 'Leite condensado,achocolatado e granulado.',
      quantidade: 'pedido mínimo : 20 unidades',
      valor: 1.5,
    },
    {
      imagem: 'public/images/doce-beijinho.png',
      titulo: 'Beijinho',
      ingredientes: 'Leite condensado, coco ralado, cravo e açúcar.',
      quantidade: 'pedido mínimo : 20 unidades',
      valor: 1.5,
    },
    { 
      imagem: 'public/images/doce-moranguinho.png',
      titulo: 'Moranginho',
      ingredientes: 'Leite condensado, gelatina de morango e açúcar.',
      quantidade: 'pedido mínimo : 20 unidades',
      valor: 1.5,
    },
    {
      imagem: 'public/images/doce-beijinho.png',
      titulo: 'Beijinho',
      ingredientes: 'Leite condensado, coco ralado, cravo e açúcar.',
      quantidade: 'pedido mínimo : 20 unidades',
      valor: 1.5,
    },
    { 
      imagem: 'public/images/doce-moranguinho.png',
      titulo: 'Moranginho',
      ingredientes: 'Leite condensado, gelatina de morango e açúcar.',
      quantidade: 'pedido mínimo : 20 unidades',
      valor: 1.5,
    },
  ];
 
  const rootStyles = getComputedStyle(document.documentElement);
  const tituloCor = rootStyles.getPropertyValue('--fundo-verde-doce').trim();  
  const precoBackground = rootStyles.getPropertyValue('--botao-rosa-doce').trim();  
  const tipos = 'Tipos de Doces';


  return (
    <div style={{ backgroundColor: 'var(--fundo-verde-doce)', minHeight: '100vh' }}>
      <Header
        title={docesInfo.title}
        description={docesInfo.description}
        imgHeader={docesInfo.imgHeader}
        imgHeaderStyles={{
          top: '-110px',
          left: '105px',
          width: '190px',  
      }}
      buttonColors={buttonColors} />  
      <Cards 
        produtos={produtos} 
        tituloCor={tituloCor} 
        precoBackground={precoBackground} 
        tipos={tipos} 
      /> 
    </div>
  );
}

export default Doces;
