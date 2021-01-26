import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PartnerPage.css';
import { Partners } from '../../components';

import { PARTNERS_CONST } from './partnersData';

export default function PartnerPage() {
  const { key } = useParams();
  const partnerFiltered = PARTNERS_CONST.filter((partner) => partner.id === key);

  return (
    <>
      <section className="partner-page-section">
        <div className="partner-page-header">
          <div className="partner-page-header-title">
            <h1>{partnerFiltered[0].name}</h1>
            <small>{partnerFiltered[0].desc}</small>
          </div>
          <navbar>
            <div>
              <a href="/#">Quem somos</a>
            </div>
            <div>
              <a href="/#">Soluções</a>
            </div>
            <div>
              <a href="/#">Podemos te ajudar?</a>
            </div>
            <div>
              <a href="/#">Nosso time</a>
            </div>
          </navbar>
        </div>
        <div className="partner-page-content">
          <div className="partner-page-left">
            <div className="partner-page-logo">
              <img
                style={{ backgroundImage: `url(${partnerFiltered[0].img})` }}
                alt={partnerFiltered[0].name}
              />
            </div>
            <div className="partner-page-about">
              <h3>Quem somos?</h3>
              <p className="text-justify">{partnerFiltered[0].about}</p>
            </div>
          </div>
          <div className="partner-page-right">
            <h3>Nossos pilares</h3>
            <p>{partnerFiltered[0].fundamentals}</p>
          </div>
        </div>
      </section>
      <Partners />
    </>
  );
}

PartnerPage.propTypes = {};

PartnerPage.defaultProps = {};
