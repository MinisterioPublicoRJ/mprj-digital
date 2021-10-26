/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import useMedia from '../hooks/Usemedia';
import logoMp from '../../assets/logoMp.svg';
import { getProductNavbarData, getPartnerNavbarData } from '../../api/api';

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
  const [productNavbarData, setProductNavbarData] = useState();
  const [partnerNavbarData, setPartnerNavbarData] = useState();

  async function loadProductNavbarData() {
    const productResponse = await getProductNavbarData();
    if (productResponse) {
      setProductNavbarData(productResponse);
    }    
    const partnerResponse = await getPartnerNavbarData();
    if (partnerResponse) {
      setPartnerNavbarData(partnerResponse);
    }
    
  }

  useEffect(() => loadProductNavbarData(), []);

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
        <NavLink to="/" > 
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
                  duration: 600,
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
              <span className={tooltipText} style={{ marginBottom: 8}}>Conheça os setores envolvidos nessa iniciativa</span>
              <div className={dropdownContent}>
                {partnerNavbarData ? partnerNavbarData.map(
                  ({title, name}) =>
                  <NavLink to={`/parceiro/${name}/sobre`} type="button" className="dropbtn">
                    {title}
                  </NavLink>)
                  : null}               
              </div>
            </div>
          </div>
          <div className={dropdown}>
            <div className={sectionToolTip}>
              <NavLink to="/" type="button" className={dropbtnButton} id="basic-button">
                Produtos
              </NavLink>
              <span className={tooltipText} style={{ marginBottom: 8}}>Navegue e conheça nossos produtos e sistemas</span>
              <div className={dropdownContent}>
                {productNavbarData ? productNavbarData.map(
                  ({title, name}) =>
                  <NavLink to={`/produto/${name}`} type="button" className="dropbtn">
                    {title}
                  </NavLink>)
                  : null}
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
                  duration: 600,
                })}
            >
              Repositórios
            </NavLink>
            <span className={tooltipText}>Encontre aqui todas as nossas Acervo de Dados</span>
          </div>
          <div className={sectionToolTip}>
            <NavLink
              to="/"
              type="button"
              onClick={() =>
                scroller.scrollTo('rodape', {
                  smooth: true,
                  offset: -70,
                  duration: 600,
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
