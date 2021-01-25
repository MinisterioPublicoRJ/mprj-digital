import React from 'react';
import PropTypes from 'prop-types';
import './ButtonHeader.css';

export default function ButtonHeader({ title, onClick, titleBtn }) {
  return (
    <div className="section-products">
      <button className={`button-${titleBtn}`} onClick={onClick} type="button">
        {title}
      </button>
    </div>
  );
}
ButtonHeader.propTypes = {
  title: PropTypes.string.isRequired,
  titleBtn: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
