import React from 'react';
import './ProductItem.css';

import PropTypes from 'prop-types';

export default function ProductItem({ product: { url, imgUrl, title, text } }) {
  return (
    <>
      <div className="product">
        <a href={url} rel="noreferrer">
          <img src={process.env.PUBLIC_URL + imgUrl} alt={title} />
        </a>
        <h4>{title}</h4>
        <p className="text">{text}</p>
      </div>
    </>
  );
}
ProductItem.propTypes = {
  product: PropTypes.shape({
    url: PropTypes.string,
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};
