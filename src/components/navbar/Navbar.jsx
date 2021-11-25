import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import useMedia from '../hooks/Usemedia';
import logoMp from '../../assets/logoMp.svg';
import { getProductNavbarData, getPartnerNavbarData } from '../../api/api';
import DropdownProducts from './dropdownProducts/DropdownProducts';

import {
  navbarLogo,
  navbarLinks,
  navbarSectionToolTip,
  navbarTooltipText,
  navbarClass,
  navbarMobile,
  navbarMobileButtonActive,
  navbarDropdown,
  navbarDropdownContent,
  navbarMobileButton,
  navbarDropbtnButton,
  navbarBasicButton,
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
          className={`${navbarMobileButton}  ${mobileMenu && `${navbarMobileButtonActive}`}`}
          aria-label="Menu"
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}
      <section
        id="navBar"
        className={`${mobile ? `${navbarMobile}` : `${navbarClass}`} ${
          mobileMenu && `${navbarMobileButtonActive}`
        }`}
      >
        <NavLink to="/">
          <img className={navbarLogo} src={logoMp} alt="logo-Mp" />
        </NavLink>
        <section className={navbarLinks}>
          <div className={navbarSectionToolTip}>
            <NavLink
              to="/"
              onClick={() => scroller.scrollTo('mprjDigital', {
                smooth: true,
                offset: -70,
                duration: 600,
              })}
            >
              O que é o MPRJ Digital?
            </NavLink>
            <span className={navbarTooltipText}>Conheça a nossa visão de dados abertos</span>
          </div>
          <div className={navbarSectionToolTip}>
            <NavLink to="/parceiro/gadg/sobre">Equipe</NavLink>
          </div>
          <div className={navbarDropdown}>
            <div className={navbarSectionToolTip}>
              <NavLink to="/" type="button" className={navbarDropbtnButton} id={navbarBasicButton}>
                Produtos
              </NavLink>
              <span className={navbarTooltipText} style={{ marginBottom: 8 }}>
                Navegue e conheça nossos produtos e sistemas
              </span>
              <div className={navbarDropdownContent}>
                <DropdownProducts productsData={productNavbarData} />
              </div>
            </div>
          </div>
          <div className={navbarSectionToolTip}>
            <NavLink
              to="/"
              onClick={() => scroller.scrollTo('repositorios', {
                smooth: true,
                offset: -70,
                duration: 600,
              })}
            >
              Repositórios
            </NavLink>
            <span className={navbarTooltipText}>Encontre aqui todas as nossas Acervo de Dados</span>
          </div>
          <div className={navbarSectionToolTip}>
            <NavLink
              to="/"
              type="button"
              onClick={() => scroller.scrollTo('rodape', {
                smooth: true,
                offset: -70,
                duration: 600,
              })}
            >
              Fale conosco
            </NavLink>
            <span className={navbarTooltipText}>Tem uma Reclamação ou precisa da nossa ajuda.</span>
          </div>
        </section>
      </section>
    </div>
  );
}
