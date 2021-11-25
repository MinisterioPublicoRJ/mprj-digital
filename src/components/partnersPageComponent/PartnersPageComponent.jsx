import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PartnersPageComponentSlick.css';

import { getPartnertComponentData } from '../../api/api';
import {
  partnersOuter,
  partnersHeaderPage,
  PartnersItemListPage,
  partnerPageComponentSlickCard,
} from './PartnersPageComponent.module.css';

const sliderSettings = {
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
};

export default function PartnersPageComponent() {
  const [partnersData, setPartnersData] = useState();

  async function onMount() {
    const { total, partnersMiniatureArray } = await getPartnertComponentData();
    setPartnersData(partnersMiniatureArray);
  }

  useEffect(() => {
    onMount();
  }, []);

  return (
    <section className={partnersOuter}>
      <div className={partnersHeaderPage}>
        <h1>Parceiros</h1>
        <p>Setores parceiros diretamente ligados na iniciativa MPRJ Digital.</p>
      </div>
      <div className={PartnersItemListPage}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider id="slider" {...sliderSettings}>
          {partnersData && partnersData.map(({ id, name, imageSrc, hasPage }) => {
            if (hasPage) {
              return (
                <Link key={id} to={`/parceiro/${name}/sobre`}>
                  <img src={imageSrc} alt={name} className={partnerPageComponentSlickCard} />
                </Link>
              );
            }
            return (
              <img key={id} src={imageSrc} alt={name} className={partnerPageComponentSlickCard} />
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
