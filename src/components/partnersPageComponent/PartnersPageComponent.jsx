/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './PartnersPageComponent.css';
import '../partners/partners.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GADG from '../../assets/logos/gadg.png';
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
        <Slider id="slider" {...settings}>
          <div>
            <img className="" src={GADG} alt="CADG" />
          </div>
          <div>
            <img className="" src={CSI} alt="CSI" />
          </div>
          <div>
            <img className="" src={GATE} alt="GATE" />
          </div>
          <div>
            <img className="" src={INOVA} alt="INOVA" />
          </div>
          <div>
            <img className="" src={SGMP} alt="SGMP" />
          </div>
          <div>
            <img className="" src={STIC} alt="STIC" />
          </div>
          <div>
            <img className="" src={SUBADM} alt="GADG" />
          </div>
          <div>
            <img className="" src={SUBPLAN} alt="CSI" />
          </div>
          <div>
            <img className="" src={IEP} alt="GATE" />
          </div>
        </Slider>
      </div>
    </section>
  );
}
