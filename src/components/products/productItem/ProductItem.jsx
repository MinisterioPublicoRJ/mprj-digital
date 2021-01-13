import React from 'react';
import './ProductItem.css';
import PropTypes from 'prop-types';

export default function ProductItem({ title, text, imgUrl, url }) {
  return (
    <div className="product">
      <a href={url} target="_blank" rel="noreferrer">
        <img src={process.env.PUBLIC_URL + imgUrl} alt={title} />
      </a>
      <h4>{title}</h4>
      <p className="text">{text}</p>
    </div>
  );
}
ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
