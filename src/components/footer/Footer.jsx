/* eslint-disable react/self-closing-comp */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import logo from '../../assets/logoNovo.png';
import logoOuvidoria from '../../assets/Ouvidoria.png';

export default function Footer() {
  return (
    <div className="footer-outer" id="rodape">
      <div className="footer-menu">
        <div className="footer-menu-column">
          <img className="logo-footer" src={logo} alt="logo" />
          <span className="create-space">© Ministério Público do Estado do Rio de Janeiro</span>
          <div className="footer-menu-icons">
            <a
              href="https://twitter.com/MP_RJ"
              target="new"
              rel="noreferrer"
              className="footer-menu-icon-twitter"
              aria-label="Twitter"
            />
            <a
              href="https://www.instagram.com/mprj.oficial/"
              target="new"
              rel="noreferrer"
              className="footer-menu-icon-instagram"
              aria-label="Instagram"
            />
            <a
              href="https://www.facebook.com/MPRJ.Oficial/"
              target="new"
              rel="noreferrer"
              className="footer-menu-icon-facebook"
              aria-label="Facebook"
            />
          </div>
        </div>
        <div className="footer-menu-column">
          <h3>PRODUTOS EM DESTAQUE</h3>
          <a href="https://parquetdigital.mprj.mp.br/" target="_blank" rel="noreferrer">
            Parquet Digital
          </a>
          <a
            href="https://www.mprj.mp.br/documents/20184/1444502/caderno_ierbb_projeto_farol_luz_sobre_as_promotorias.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Farol
          </a>
          {/* <a href="/#">Integra</a>
          <a href="/#">Radar</a>
          <a href="/#">Painel do Saneamento</a>
          <a href="/#">Painel de Compras</a> */}
        </div>
        <div className="footer-menu-column">
          <h3>MPRJ DIGITAL</h3>
          <a href="#mprjDigital">Quem Somos?</a>
          <a href="#parceiros">Parceiros</a>
          {/* <a href="/#">Contato</a> */}
        </div>
        <div className="footer-menu-column">
          <h3>OUVIDORIA</h3>
          <a
            href="http://www.mprj.mp.br/comunicacao/ouvidoria"
            target="new"
            rel="noreferrer"
            className="create-space"
          >
            Dúvidas e Reclamações
          </a>
          <a
            href="http://www.mprj.mp.br/comunicacao/ouvidoria"
            target="new"
            rel="noreferrer"
            className="create-space"
          >
            <img className="icon-ouvidoria" src={logoOuvidoria} alt="Logo Ouvidoria MPRJ" />
          </a>
        </div>
      </div>
      <button type="button" className="button-back-to-top">
        <NavLink
          to="/"
          type="button"
          className="dropbtn-button"
          onClick={() =>
            scroller.scrollTo('allnavBar', {
              smooth: true,
              offset: -70,
              duration: 400,
            })}
        >
        </NavLink>
      </button>
    </div>
  );
}
