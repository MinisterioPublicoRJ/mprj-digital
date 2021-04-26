/* eslint-disable react/no-this-in-sfc */
import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import logo from '../../assets/logoNovo.png';

export default function Navbar() {
  return (
    <navbar className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <section className="navbar-links">
        <div className="tooltip">
          <a href="#mprjDigital" className="dropdow-button">
            O que é o MPRJ Digital?
          </a>
          <span className="tooltiptext">Conheça a nossa visão de dados abertos</span>
        </div>
        <div className="dropdown">
          <div className="tooltip">
            <NavLink to="/" type="button" className="dropbtn-button" id="basic-button">
              Parceiros
            </NavLink>
            <span className="tooltiptext">Navegue e conheça nossos produtos e sistemas</span>
            <div className="dropdown-content">
              <NavLink to="/parceiro/cadg">Cadg</NavLink>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div className="tooltip">
            <NavLink to="/" type="button" className="dropbtn-button" id="basic-button">
              Produtos
            </NavLink>
            <span className="tooltiptext">Navegue e conheça nossos produtos e sistemas</span>
            <div className="dropdown-content">
              <NavLink to="/produto/farol" type="button" className="dropbtn">
                Farol
              </NavLink>
              <NavLink to="/produto/parquet_digital" type="button" className="dropbtn">
                Parque Digital
              </NavLink>
            </div>
          </div>
        </div>
        <div className="tooltip">
          <a href="#repositorios" className="dropbtn">
            Repositórios
          </a>
          {/* <NavLink to="/produto/" className="dropbtn" activeStyle={{ color: '#263859' }}>
            Repositórios
            </NavLink> */}
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
          <a href="#rodape" className="dropbtn">
            Dúvidas e Reclamações
          </a>
          {/* <NavLink to="/produto/" className="dropbtn" activeStyle={{ color: '#263859' }}>
            Dúvidas e Reclamações
          </NavLink> */}
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
