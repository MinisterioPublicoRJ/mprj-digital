/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-constant-condition */
/* eslint-disable react/no-this-in-sfc */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import useMedia from '../hooks/Usemedia';
import './Navbar.css';
import logo from '../../assets/logoNovo.png';

export default function Navbar() {
  const mobile = useMedia('(max-width: 67.5rem)');
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      {mobile && (
        <button
          className={`${'mobileButton'} ${mobileMenu && 'mobileButtonActive'}`}
          aria-label="Menu"
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}

      <navbar
        className={`${mobile ? 'navbarMobile' : 'navbar'} ${mobileMenu && 'navbarMobileActive'}`}
      >
        <img className="logo" src={logo} alt="logo" />
        <section className="navbar-links">
          <div className="tooltip">
            <NavLink
              to="/"
              className="dropdow-button"
              onClick={() =>
                scroller.scrollTo('mprjDigital', {
                  smooth: true,
                  offset: -70,
                  duration: 400,
                })}
            >
              O que é o MPRJ Digital?
            </NavLink>
            <span className="tooltiptext">Conheça a nossa visão de dados abertos</span>
          </div>
          <div className="dropdown">
            <div className="tooltip">
              <NavLink
                to="/"
                type="button"
                className="dropbtn-button"
                id="basic-button"
                onClick={() =>
                  scroller.scrollTo('parceiros', {
                    smooth: true,
                    offset: -70,
                    duration: 400,
                  })}
              >
                Parceiros
              </NavLink>
              <span className="tooltiptext">Conheça os setores envolvidos nessa iniciativa</span>
              <div className="dropdown-content">
                <NavLink to="/parceiro/cadg">Cadg</NavLink>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="tooltip">
              <NavLink
                to="/"
                type="button"
                className="dropbtn-button"
                id="basic-button"
                onClick={() =>
                  scroller.scrollTo('produtos', {
                    smooth: true,
                    offset: -70,
                    duration: 400,
                  })}
              >
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
            <NavLink
              to="/"
              className="dropdow-button"
              onClick={() =>
                scroller.scrollTo('repositorios', {
                  smooth: true,
                  offset: -70,
                  duration: 400,
                })}
            >
              Repositórios
            </NavLink>
            <span className="tooltiptext">Encontre aqui todas as nossas Acervo de Dados</span>
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
          <div className="tooltip">
            <NavLink
              to="/"
              className="dropdow-button"
              type="button"
              id="basic-button"
              onClick={() =>
                scroller.scrollTo('rodape', {
                  smooth: true,
                  offset: -70,
                  duration: 400,
                })}
            >
              Dúvidas e Reclamações
            </NavLink>
            <span className="tooltiptext">Tem uma Reclamação ou precisa da nossa ajuda.</span>
          </div>
        </section>
      </navbar>
    </>
  );
}
