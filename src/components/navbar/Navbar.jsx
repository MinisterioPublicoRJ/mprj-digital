import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Logo from '../../assets/logo';

export default function Navbar() {
  return (
    <navbar className="navbar">
      <Logo alt="logo" />
      <section className="navbar-links">
        <div className="tooltip">
          <NavLink to="/" end className="dropdow-button">
            O que é o MPRJ Digital?
          </NavLink>
          <span className="tooltiptext">Conheça a nossa visão de dados abertos</span>
        </div>
        <div className="dropdown">
          <div className="tooltip">
            <button type="button" className="dropbtn" id="basic-button">
              Parceiros
            </button>
            <span className="tooltiptext">Navegue e conheça nossos produtos e sistemas</span>
            <div className="dropdown-content">
              <NavLink to="/produto">Gate</NavLink>
              <NavLink to="/produto">Cenpe</NavLink>
              <NavLink to="/produto">Csi</NavLink>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div className="tooltip">
            <button type="button" className="dropbtn" id="basic-button">
              Produtos
            </button>
            <span className="tooltiptext">Navegue e conheça nossos produtos e sistemas</span>
            <div className="dropdown-content">
              <NavLink to="/produto">Integra</NavLink>
              <NavLink to="/produto">Farol</NavLink>
              <NavLink to="/produto">Ouvidoria</NavLink>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div className="tooltip">
            <button type="button" className="dropbtn" id="basic-button">
              Repositórios
            </button>
            <span className="tooltiptext">Encontre aqui todas os nossos acervos de dados</span>
            <div className="dropdown-content">
              <NavLink to="/produto">Integra</NavLink>
              <NavLink to="/produto">Farol</NavLink>
              <NavLink to="/produto">Ouvidoria</NavLink>
            </div>
          </div>
        </div>
        <div className="tooltip">
          <NavLink to="home" className="dropdow-button">
            Fale Conosco
            <span className="tooltiptext">
              Adoramos receber elogios, mas o seu feedback e crítica são ainda melhores
            </span>
          </NavLink>
        </div>
        <div className="tooltip">
          <NavLink className="dropdow-button" to="home">
            Dúvidas e Reclamações
            <span className="tooltiptext">
              Não hesite em reclamar ou pedir ajuda caso tenha algum problema.
            </span>
          </NavLink>
        </div>
      </section>
    </navbar>
  );
}
