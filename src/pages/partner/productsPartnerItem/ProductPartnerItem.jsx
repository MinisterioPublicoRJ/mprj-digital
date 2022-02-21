import React from 'react';
import PropTypes from 'prop-types';
import './ProductPartnerItem.css';
import miniaturaDefault from '../../../assets/produto-miniatura-default.png';

export default function ProductPartnerItem({ products }) {
  return (
    <div className="partner-page-cards">
      {products.map((card) => (
        <div key={card.id} className="partner-page-card">
          <a target="" rel="noreferrer" href={`/produto/${card.name}`}>
            {!card.imageSrc ? (
              <img src={miniaturaDefault} alt={card.title} />
            ) : (
              <img src={card.imageSrc} alt={card.title} />
            )}
          </a>
          <h4 style={{ color: '#3E3D3D' }}>{card.title}</h4>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

ProductPartnerItem.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
