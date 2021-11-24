import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PartnersPageComponentSlick.css';
import PARTNERS_DATA_CONST from '../partners/partnersDataComponent';
import {
  partnersOuter,
  partnersHeaderPage,
  PartnersItemListPage,
} from './PartnersPageComponent.module.css';

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  variableWidth: true,
  variableHeight: true,
  arrows: true,
};

export default function PartnersPageComponent() {
  return (
    <section id={partnersOuter}>
      <div className={partnersHeaderPage}>
        <h1>Parceiros</h1>
        <p>Setores parceiros diretamente ligados na iniciativa MPRJ Digital.</p>
      </div>
      <div className={PartnersItemListPage}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider id="slider" {...sliderSettings}>
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
