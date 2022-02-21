/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import miniaturaDefault from '../../../assets/produto-miniatura-default.png';
import styles from './TeamPage.module.css';

export default function TeamPage({ products }) {
  return (
    <div className={styles.partnerPageCards}>
      {products.map((card) => (
        <div key={card.id} className={styles.partnerPageCard}>
          <a target="" rel="noreferrer" href={`/produto/${card.name}`}>
            {!card.imageSrc ? (
              <img src={miniaturaDefault} alt={card.title} />
            ) : (
              <img src={card.imageSrc} alt={card.title} />
            )}
          </a>
          <div className={styles.partnerPageCardsTag}>
            <p>Gerente</p>
          </div>
          <h4>{card.title}</h4>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

TeamPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
