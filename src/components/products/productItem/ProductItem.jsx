/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import miniaturaDefault from '../../../assets/produto-miniatura-default.png';

import './ProductItem.css';

export default function ProductItem({ name, title, description, imageSrc }) {
  return (
    <div className="product">
      <Link to={`/produto/${name}`}>
        {!imageSrc ? (
          <img src={miniaturaDefault} alt={title} />
        ) : (
          <img src={imageSrc} alt={title} />
        )}
      </Link>
      <h4>{title}</h4>
      <p className="text">{description}</p>
    </div>
  );
}
ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
