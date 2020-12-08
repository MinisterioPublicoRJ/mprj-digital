import React from 'react';
import './ProductItem.css';
import PropTypes from 'prop-types';

export default function ProductItem({ title, text, imgUrl }) {
  return (
    <div className="product">
      <img width={157} height={157} src={process.env.PUBLIC_URL + imgUrl} alt={title} />
      <h4>{title}</h4>
      <p className="text">{text}</p>
    </div>
  );
}
ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
