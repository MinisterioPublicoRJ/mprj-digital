/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import logoMp from '../../assets/logoMp.svg';
import logoOuvidoria from '../../assets/Ouvidoria.png';
import {
  footerOuter,
  footerMenu,
  footerMenuColumn,
  footerLogo,
  footerCreateSpace,
  footerMenuIcons,
  footerMenuIconTwitter,
  footerMenuIconInstagram,
  footerMenuIconFacebook,
  footerIconOuvidoria,
  buttonBackToTop,
} from './Footer.module.css';

export default function Footer() {
  return (
    <div className={footerOuter} id="rodape">
      <div className={footerMenu}>
        <div className={footerMenuColumn}>
          <img className={footerLogo} src={logoMp} alt="logo" />
          <span className={footerCreateSpace}>© Ministério Público do Estado do Rio de Janeiro</span>
          <div className={footerMenuIcons}>
            <a
              href="https://twitter.com/MP_RJ"
              target="new"
              rel="noreferrer"
              className={footerMenuIconTwitter}
              aria-label="Twitter"
            />
            <a
              href="https://www.instagram.com/mprj.oficial/"
              target="new"
              rel="noreferrer"
              className={footerMenuIconInstagram}
              aria-label="Instagram"
            />
            <a
              href="https://www.facebook.com/MPRJ.Oficial/"
              target="new"
              rel="noreferrer"
              className={footerMenuIconFacebook}
              aria-label="Facebook"
            />
          </div>
        </div>
        <div className={footerMenuColumn}>
          <h3>PRODUTOS EM DESTAQUE</h3>
          <a href="/produto/parquet-digital" rel="noreferrer">
            Parquet Digital
          </a>
          <a href="/produto/farol" rel="noreferrer">
            Farol
          </a>
        </div>
        <div className={footerMenuColumn}>
          <h3>MPRJ DIGITAL</h3>
          <a href="/#mprjDigital">Quem Somos?</a>
          <a href="/#parceiros">Parceiros</a>
        </div>
        <div className={footerMenuColumn}>
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
            <img className={footerIconOuvidoria} src={logoOuvidoria} alt="Logo Ouvidoria MPRJ" />
          </a>
        </div>
      </div>
      <button type="button" className={buttonBackToTop}>
        <NavLink
          to="/"
          type="button"
          className="dropbtn-button"
          onClick={() =>
            scroller.scrollTo('allnavBar', {
              smooth: true,
              offset: -70,
              duration: 400,
            })
          }>
        </NavLink>
      </button>
    </div>
  );
}
