/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import './PartnersPageComponent.css';
import '../partners/partners.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import PARTNERS_DATA_CONST from '../partners/partnersDataComponent';
import { getPartnertComponentData } from '../../api/api';

export default function PartnersPageComponent() {
  const [partnersList, setPartnersList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPagePartners = async () => {
      setLoading(true);
      try {
        const response = await getPartnertComponentData();
        setPartnersList(response);
      } catch (e) {
        setPartnersList(false);
      } finally {
        setLoading(false);
      }
    };
    loadPagePartners();
  }, []);

  const settings = {
    dots: true,
    // infinite: partnersList.length > 3,
    infinite: true,

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
      {loading ? (
        'Carregando...'
      ) : (
        <div className="partners-itemList-page">
          <Slider id="slider" {...settings}>
            {/* {partnersList.map((partner) => (
            <Link
              key={partner.name}
              target="new"
              rel="noreferrer"
              to={`/parceiro/${partner.name}/sobre`}
            >
              <img src={partner.resources[0].url} alt={partner.title} />
            </Link>
          ))} */}
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
      )}
    </section>
  );
}
