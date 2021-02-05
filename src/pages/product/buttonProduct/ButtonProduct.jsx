import React from 'react';
import PropTypes from 'prop-types';
import './ButtonProduct.css';

export default function ButtonProduct({ titleBtn }) {
  return (
    <button className="btns-products" type="button">
      {titleBtn}
    </button>
  );
}
ButtonProduct.propTypes = {
  titleBtn: PropTypes.string.isRequired,
};
