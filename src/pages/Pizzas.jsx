import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';  

function Pizzas() {
  const docesInfo = {
    title: "Pizzas",
    description: "Delicie-se com nossas pizzas brotinhos, perfeitas para quem ama qualidade em tamanho individual. Preparadas com massas fresquinhas, cobertas com ingredientes selecionados. Elas combinam praticidade com sabor irresistível.",
    imgHeader: "public/images/pizza-header.png",
  };


  const buttonColors = {
    buttonBackground: 'var(--botao-vermelho-pizza)',
    buttonHover: 'var(--botao-vermelho-pizza-hover)',
  };

  const produtos = [
    {
      imagem: 'public/images/pizza1.png',
      titulo: 'Mini Pizza',
      ingredientes: 'calabresa, mista, marguerita, queijo e frango catupiry.',
      quantidade: 'kit com 36 unidades',
      valor: 35.5,
    },
    {
      imagem: 'public/images/pizza2.png',
      titulo: 'Pizza Brotinho',
      ingredientes: 'calabresa, mista, marguerita, queijo e frango catupiry.',
      quantidade: 'kit com 10 unidades',
      valor: 45.5,
    },
    { 
      imagem: 'public/images/pizza3.png',
      titulo: 'Pizza Grande',
      ingredientes: 'calabresa, mista, marguerita, queijo e frango catupiry.',
      quantidade: '1 unidade.',
      valor: 18.5,
    }, 
  ];
 
  const rootStyles = getComputedStyle(document.documentElement);
  const tituloCor = rootStyles.getPropertyValue('--fundo-amarelo-pizza').trim();  
  const precoBackground = rootStyles.getPropertyValue('--botao-vermelho-pizza').trim();  
  const tipos = 'Tipos de Pizzas';


  return (
    <div style={{ backgroundColor: 'var(--fundo-amarelo-pizza)', minHeight: '100vh' }}>
      <Header
        title={docesInfo.title}
        description={docesInfo.description}
        imgHeader={docesInfo.imgHeader}
        imgHeaderStyles={{
          top: '-130px',
          left: '105px',
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


export default Pizzas;


