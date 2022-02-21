import React from 'react';
import PropTypes from 'prop-types';
import './ProductPartnerItem.css';
import miniaturaDefault from '../../../assets/produto-miniatura-default.png';
import { getProductPageData } from '../../../api/api';

export default function ProductPartnerItem({ products }) {
  async function accessProduct(productName) {
    const product = await getProductPageData(productName);
    window.location.href = product.url;
  }

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
          <h4 className="partner-page-card--title">{card.title}</h4>
          <p className="partner-page-card--description">{card.description}</p>
          <div className="partner-page-links">
            <a
              href={`/produto/${card.name}`}
              className="partner-page-link partner-page-link--button"
            >
              Saiba Mais
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                accessProduct(card.name);
              }}
              href="./"
              className="partner-page-link partner-page-link--text"
            >
              Acessar
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

ProductPartnerItem.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
