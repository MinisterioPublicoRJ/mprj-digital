/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './PartnersPageComponent.css';
import '../partners/partners.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CADG from '../../assets/logos/cadg.png';
import CENPE from '../../assets/logos/cenpe.png';
import CSI from '../../assets/logos/csi.png';
import GATE from '../../assets/logos/gate.png';
import INOVA from '../../assets/logos/inova.png';
import SGMP from '../../assets/logos/sgmp.png';
import STIC from '../../assets/logos/stic.png';
import SUBADM from '../../assets/logos/subadm.png';
import SUBPLAN from '../../assets/logos/subplan.png';
import IEP from '../../assets/logos/iep.png';

export default function PartnersPageComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <section id="partners-outer">
      <div className="partners-header-Page">
        <h1>Parceiros</h1>
        <p>Setores parceiros diretamente ligados na iniciativa MPRJ Digital.</p>
      </div>
      <div className="partners-itemList-page">
        <Slider {...settings}>
          <div>
            <a href="http://apps.mprj.mp.br/sistema/cadg/" target="_blank" rel="noreferrer">
              <img className="" src={CADG} alt="CADG" />
            </a>
          </div>
          <div>
            <a href="https://parquetdigital.mprj.mp.br/" target="_blank" rel="noreferrer">
              <img className="" src={CENPE} alt="CENPE" />
            </a>
          </div>
          <div>
            <a href="https://parquetdigital.mprj.mp.br/" target="_blank" rel="noreferrer">
              <img className="" src={CSI} alt="CSI" />
            </a>
          </div>
          <div>
            <a href="https://parquetdigital.mprj.mp.br/" target="_blank" rel="noreferrer">
              <img className="" src={GATE} alt="GATE" />
            </a>
          </div>
          <div>
            <a href="https://parquetdigital.mprj.mp.br/" target="_blank" rel="noreferrer">
              <img className="" src={INOVA} alt="INOVA" />
            </a>
          </div>
          <div>
            <a href="https://parquetdigital.mprj.mp.br/" target="_blank" rel="noreferrer">
              <img className="" src={SGMP} alt="SGMP" />
            </a>
          </div>
          <div>
            <a href="https://parquetdigital.mprj.mp.br/" target="_blank" rel="noreferrer">
              <img className="" src={STIC} alt="STIC" />
            </a>
          </div>
          <div>
            <a href="https://parquetdigital.mprj.mp.br/" target="_blank" rel="noreferrer">
              <img className="" src={SUBADM} alt="CENPE" />
            </a>
          </div>
          <div>
            <a href="https://parquetdigital.mprj.mp.br/" target="_blank" rel="noreferrer">
              <img className="" src={SUBPLAN} alt="CSI" />
            </a>
          </div>
          <div>
            <a href="https://parquetdigital.mprj.mp.br/" target="_blank" rel="noreferrer">
              <img className="" src={IEP} alt="GATE" />
            </a>
          </div>
        </Slider>
      </div>
    </section>
  );
}
