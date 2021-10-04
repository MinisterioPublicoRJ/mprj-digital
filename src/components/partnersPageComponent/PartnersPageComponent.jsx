/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './PartnersPageComponent.css';
import '../partners/partners.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PARTNERS_DATA_CONST from '../partners/partnersDataComponent';

export default function PartnersPageComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: true,
    variableHeight: true,
    arrows: true,
  };
  return (
    <section id="partners-outer">
      <div className="partners-header-Page">
        <h1>Parceiros</h1>
        <p>Setores parceiros diretamente ligados na iniciativa MPRJ Digital.</p>
      </div>
      <div className="partners-itemList-page">
        <Slider id="slider" {...settings}>
          {PARTNERS_DATA_CONST.map((cards) => (
            <div key={cards.id}>
              <a
                className={`${cards.actionLink === '' ? 'cards-action-link-active' : ''}`}
                target="new"
                rel="noreferrer"
                href={cards.actionLink}
              >
                <img src={cards.img} alt={cards.img} />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
