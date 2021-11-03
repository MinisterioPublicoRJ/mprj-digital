/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import logoMp from '../../assets/logoMp.svg';
import logoOuvidoria from '../../assets/Ouvidoria.png';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerOuter} id="rodape">
      <div className={styles.footerMenu}>
        <div className={styles.footerMenuColumn}>
          <img className={styles.logoFooter} src={logoMp} alt="logo" />
          <span className={styles.createSpace}>© Ministério Público do Estado do Rio de Janeiro</span>
          <div className={styles.footerMenuIcons}>
            <a
              href="https://twitter.com/MP_RJ"
              target="new"
              rel="noreferrer"
              className={styles.footerMenuIconTwitter}
              aria-label="Twitter"
            />
            <a
              href="https://www.instagram.com/mprj.oficial/"
              target="new"
              rel="noreferrer"
              className={styles.footerMenuIconInstagram}
              aria-label="Instagram"
            />
            <a
              href="https://www.facebook.com/MPRJ.Oficial/"
              target="new"
              rel="noreferrer"
              className={styles.footerMenuIconFacebook}
              aria-label="Facebook"
            />
          </div>
        </div>
        <div className={styles.footerMenuColumn}>
          <h3>PRODUTOS EM DESTAQUE</h3>
          <a href="/produto/parquet-digital" rel="noreferrer">
            Parquet Digital
          </a>
          <a href="/produto/farol" rel="noreferrer">
            Farol
          </a>
        </div>
        <div className={styles.footerMenuColumn}>
          <h3>MPRJ DIGITAL</h3>
          <a href="#mprjDigital">Quem Somos?</a>
          <a href="#parceiros">Parceiros</a>
        </div>
        <div className={styles.footerMenuColumn}>
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
            <img className={styles.iconOuvidoria} src={logoOuvidoria} alt="Logo Ouvidoria MPRJ" />
          </a>
        </div>
      </div>
      <button type="button" className={styles.buttonBackToTop}>
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
