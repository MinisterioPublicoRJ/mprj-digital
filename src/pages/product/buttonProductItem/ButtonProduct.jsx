import React from 'react';
import PropTypes from 'prop-types';
import './ButtonProduct.css';

export default function ButtonProduct({ titleBtn, onClick }) {
  return (
    <>
      <button onClick={onClick} className="btns-products" type="button">
        {titleBtn}
      </button>
      <div className="arrow-to-right" />
    </>
  );
}
ButtonProduct.propTypes = {
  titleBtn: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
