/* eslint-disable react/self-closing-comp */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import logoMp from '../../assets/logoMp.svg';
import logoOuvidoria from '../../assets/Ouvidoria.png';

export default function Footer() {
  return (
    <div className="footer-outer" id="rodape">
      <div className="footer-menu">
        <div className="footer-menu-column">
          <img className="logo-footer" src={logoMp} alt="logo" />
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
          <a href="/produto/parquet_digital" rel="noreferrer">
            Parquet Digital
          </a>
          <a href="/produto/farol" rel="noreferrer">
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
            href="https://www.mprj.mp.br/comunicacao/ouvidoria/formulario"
            target="new"
            rel="noreferrer"
            className="create-space"
          >
            Denúncias e Reclamações
          </a>
          <a
            href="https://www.mprj.mp.br/comunicacao/ouvidoria/formulario"
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
