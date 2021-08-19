/* eslint-disable */

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import useMedia from '../hooks/Usemedia';
import logoMp from '../../assets/logoMp.svg';
import {
  icon,
  navbarLinks,
  sectionToolTip,
  tooltipText,
  navBar,
  navbarMobile,
  mobileButtonActive,
  dropdown,
  dropdownContent,
  mobileButton,
  dropbtnButton,
} from './Navbar.module.css';


export default function Navbar() {
  const mobile = useMedia('(max-width: 67.5rem)');
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div id="allnavBar">
      {mobile && (
        <button
          className={`${mobileButton}  ${mobileMenu && `${mobileButtonActive}`}`}
          aria-label="Menu"
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}
      <section
        id={navBar}
        className={`${mobile ? `${navbarMobile}` : `${navBar}`} ${mobileMenu && `${mobileButtonActive}`}`}
      >
        <NavLink to="/">
          <img className={icon} src={logoMp} alt="logo-Mp" />
        </NavLink>
        <section className={navbarLinks}>
          <div className={sectionToolTip}>
            <NavLink
              to="/"
              onClick={() =>
                scroller.scrollTo('mprjDigital', {
                  smooth: true,
                  offset: -70,
                  duration: 400,
                })}
            >
              O que é o MPRJ Digital?
            </NavLink>
            <span className={tooltipText}>Conheça a nossa visão de dados abertos</span>
          </div>
          <div className={dropdown}>
            <div className={sectionToolTip}>
              <NavLink to="/" type="button" className={dropbtnButton} id="basic-button">
                Parceiros
              </NavLink>
              <span className={tooltipText}>Conheça os setores envolvidos nessa iniciativa</span>
              <div className={dropdownContent}>
                <NavLink to="/parceiro/gadg">Gadg</NavLink>
              </div>
            </div>
          </div>
          <div className={dropdown}>
            <div className={sectionToolTip}>
              <NavLink to="/" type="button" className={dropbtnButton} id="basic-button">
                Produtos
              </NavLink>
              <span className={tooltipText}>Navegue e conheça nossos produtos e sistemas</span>
              <div className={dropdownContent}>
                <NavLink to="/produto/farol" type="button" className="dropbtn">
                  Farol
                </NavLink>
                <NavLink to="/produto/parquet_digital" type="button" className="dropbtn">
                  Parquet Digital
                </NavLink>
              </div>
            </div>
          </div>
          <div className={sectionToolTip}>
            <NavLink
              to="/"
              onClick={() =>
                scroller.scrollTo('repositorios', {
                  smooth: true,
                  offset: -70,
                  duration: 400,
                })}
            >
              Repositórios
            </NavLink>
            <span className={tooltipText}>Encontre aqui todas as nossas Acervo de Dados</span>
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
          <div className={sectionToolTip}>
            <NavLink
              to="/"
              type="button"
              onClick={() =>
                scroller.scrollTo('rodape', {
                  smooth: true,
                  offset: -70,
                  duration: 400,
                })}
            >
              Denúncias e Reclamações
            </NavLink>
            <span className={tooltipText}>Tem uma Reclamação ou precisa da nossa ajuda.</span>
          </div>
        </section>
      </section>
    </div>
  );
}
