import React from 'react';
import './ProductItem.css';
import PropTypes from 'prop-types';

export default function ProductItem({ title, text, imgUrl }) {
  return (
    <div className="product">
      <img url={process.env.PUBLIC_URL + imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
