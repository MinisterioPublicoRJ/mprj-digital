import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonHeader.module.css';

export default function ButtonHeader({ id, title, currentTab, onClick }) {
  const { sectionProductsBtn, sectionProductsBtnActive, ...colorStyles } = styles;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${sectionProductsBtn} ${currentTab.id === id ? sectionProductsBtnActive : ''}`}
    >
      <span
        className={
          colorStyles[Object.keys(colorStyles).find((className) => className.includes(id))]
        }
      />
      {title}
    </button>
  );
}

ButtonHeader.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  currentTab: PropTypes.shape({ id: PropTypes.string, index: PropTypes.number }).isRequired,
};
