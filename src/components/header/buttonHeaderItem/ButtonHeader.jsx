import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonHeader.module.css';

export default function ButtonHeader({ title, onClick, colorId, isActive }) {
  const { sectionProductsBtn, sectionProductsBtnActive, ...colorStyles } = styles;

  return (
    <div className={`${sectionProductsBtn} ${isActive ? sectionProductsBtnActive : ''}`}>
      <span
        className={
          colorStyles[Object.keys(colorStyles).find((className) => className.includes(colorId))]
        }
      />
      <button onClick={onClick} type="button">
        {title}
      </button>
    </div>
  );
}

ButtonHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  colorId: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};
