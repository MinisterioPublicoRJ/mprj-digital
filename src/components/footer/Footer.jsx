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
          <img className={styles.footerLogo} src={logoMp} alt="logo" />
          <span className={styles.footerCreateSpace}>© Ministério Público do Estado do Rio de Janeiro</span>
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
          <h3>OUVIDORIA</h3>
          <a
            href="https://www.mprj.mp.br/comunicacao/ouvidoria/formulario"
            target="new"
            rel="noreferrer"
          >
            Denúncias e Reclamações
          </a>
          <a
            href="https://www.mprj.mp.br/comunicacao/ouvidoria/formulario"
            target="new"
            rel="noreferrer"
          >
            <img className={styles.footerIconOuvidoria} src={logoOuvidoria} alt="Logo Ouvidoria MPRJ" />
          </a>
        </div>
      </div>
      <button type="button" className={styles.buttonBackToTop}>
        <NavLink
          to="/"
          type="button"
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
