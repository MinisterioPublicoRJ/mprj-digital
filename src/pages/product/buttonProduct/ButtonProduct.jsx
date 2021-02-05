import React from 'react';
import PropTypes from 'prop-types';
import './ButtonProduct.css';

export default function ButtonProduct({ titleBtn, onClick }) {
  return (
    <div className="btns-products">
      <button onClick={onClick} type="button">
        {titleBtn}
      </button>
    </div>
  );
}
ButtonProduct.propTypes = {
  titleBtn: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
