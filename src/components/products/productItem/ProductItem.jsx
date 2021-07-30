import React from 'react';
import './ProductItem.css';

import PropTypes from 'prop-types';

export default function ProductItem({ product }) {
  return (
    <>
      <div className="product">
        <a href={product.url} rel="noreferrer">
          <img src={process.env.PUBLIC_URL + product.imgUrl} alt={product.title} />
        </a>
        <h4>{product.title}</h4>
        <p className="text">{product.text}</p>
      </div>
    </>
  );
}
ProductItem.propTypes = {
  product: PropTypes.node.isRequired,
};
