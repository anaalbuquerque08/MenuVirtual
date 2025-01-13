import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomMenu.css';   
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { PiBowlFood } from "react-icons/pi";
import { PiHamburger } from "react-icons/pi";
import { TiHome } from "react-icons/ti";
import { BsInfoCircle } from "react-icons/bs";

function BottomMenu() {
  const location = useLocation();

  return (
    <div className="bottom-menu">
      <section className={`section ${location.pathname === "/pizzas" ? "pizzas-active" : ""}`}>
        <Link to="/pizzas">
          <div className="icones"><LiaPizzaSliceSolid size={30} /></div>
          <p className="label">pizzas</p>
        </Link>  
      </section>

      <section className={`section ${location.pathname === "/doces" ? "doces-active" : ""}`}>      
        <Link to="/doces">
          <div className="icones"><PiBowlFood size={30} /></div>
          <p className="label">doces</p> 
        </Link>  
      </section>

      
    <section className={`section-menu ${location.pathname === "/" ? "menu-active" : ""}`}>
        <Link to="/">
          <div className='circulo'> 
            <div className='quadrado'></div>
          <div className="icones-menu"><TiHome size={30} /></div>
          </div>

          <p className="label-menu">menu</p>
        </Link>  
      </section>
      
  


      <section className={`section ${location.pathname === "/salgados" ? "salgados-active" : ""}`}>      
        <Link to="/salgados">
          <div className="icones"><PiHamburger size={30} /></div>
          <p className="label">salgados</p> 
        </Link>  
      </section>

      <section className={`section ${location.pathname === "/infos" ? "infos-active" : ""}`}>      
        <Link to="/infos">
          <div className="icones"><BsInfoCircle size={28} /></div>
          <p className="label">infos</p> 
        </Link>  
      </section>
    </div>
  );
}

export default BottomMenu;
