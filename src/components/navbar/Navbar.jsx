import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import Logo from '../../assets/logo';

export default function Navbar() {
  return (
    <navbar className="navbar">
      <Logo alt="logo" className="logo" />
      <section className="navbar-links">
        <div className="tooltip">
          <NavLink
            to="/produto/"
            type="button"
            className="dropbtn"
            activeStyle={{ color: '#263859' }}
          >
            O que é o MPRJ Digital?
          </NavLink>
          {/* <a href="#mprjDigital" className="dropdow-button">
            O que é o MPRJ Digital?
          </a> */}
          <span className="tooltiptext">Conheça a nossa visão de dados abertos</span>
        </div>
        <div className="tooltip">
          <NavLink
            to="/produto/"
            type="button"
            className="dropbtn"
            activeStyle={{ color: '#263859' }}
          >
            Parceiros
          </NavLink>
          {/* <a href="#parceiros" className="dropdow-button">
            Parceiros
          </a> */}
        </div>
        {/* <div className="dropdown">
          <div className="tooltip">
            <a href="#parceiros" type="button" className="dropbtn" id="basic-button">
              Parceiros
            </a>
            <span className="tooltiptext">Navegue e conheça nossos produtos e sistemas</span>
            <div className="dropdown-content">
              <NavLink to="/produto">Gate</NavLink>
              <NavLink to="/produto">Cenpe</NavLink>
              <NavLink to="/produto">Csi</NavLink>
            </div>
          </div>
        </div> */}
        {/* <div className="tooltip">
          <a href="#produtos" className="dropbtn">
            Produtos
          </a>
        </div> */}
        <div className="dropdown">
          <div className="tooltip">
            <NavLink
              to="/produto/"
              type="button"
              className="dropbtn"
              activeStyle={{ color: '#263859' }}
            >
              Produtos
            </NavLink>
            <span className="tooltiptext">Navegue e conheça nossos produtos e sistemas</span>
            <div className="dropdown-content">
              <NavLink
                to="/produto/farol"
                type="button"
                className="dropbtn"
                activeStyle={{ color: '#263859' }}
              >
                Farol
              </NavLink>
              <NavLink
                to="/produto/parquet_digital"
                type="button"
                className="dropbtn"
                activeStyle={{ color: '#263859' }}
              >
                Parque Digital
              </NavLink>
            </div>
          </div>
        </div>
        <div className="tooltip">
          <NavLink to="/produto/" className="dropbtn" activeStyle={{ color: '#263859' }}>
            Repositórios
          </NavLink>
        </div>
        {/* <div className="dropdown">
          <div className="tooltip">
            <a href=".#" type="button" className="dropbtn" id="basic-button">
              Repositórios
            </a>
            <span className="tooltiptext">Encontre aqui todas os nossos acervos de dados</span>
            <div className="dropdown-content">
              <NavLink to="/produto">Integra</NavLink>
              <NavLink to="/produto">Farol</NavLink>
              <NavLink to="/produto">Ouvidoria</NavLink>
            </div>
          </div>
        </div> */}
        {/* <div className="tooltip">
          <NavLink to="home" className="dropdow-button">
            Fale Conosco
            <span className="tooltiptext">
              Adoramos receber elogios, mas o seu feedback e crítica são ainda melhores
            </span>
          </NavLink>
        </div> */}
        <div className="tooltip">
          {/* <a href="#rodape" className="dropbtn">
            Dúvidas e Reclamações
            </a> */}
          <NavLink to="/produto/" className="dropbtn" activeStyle={{ color: '#263859' }}>
            Dúvidas e Reclamações
          </NavLink>
        </div>
        {/* <div className="tooltip">
          <NavLink className="dropdow-button" to="home">
            Dúvidas e Reclamações
            <span className="tooltiptext">
              Não hesite em reclamar ou pedir ajuda caso tenha algum problema.
            </span>
          </NavLink>
        </div> */}
      </section>
    </navbar>
  );
}
