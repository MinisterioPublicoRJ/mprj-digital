import React from 'react';
import PropTypes from 'prop-types';
import { sectionProductsBtn } from './ButtonHeader.module.css';

export default function ButtonHeader({ title, onClick, colorIcon }) {
  return (
    <div className={sectionProductsBtn}>
      <span style={{ backgroundColor: colorIcon, color: colorIcon }} />
      <button onClick={onClick} type="button">
        {title}
      </button>
    </div>
  );
}
ButtonHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  colorIcon: PropTypes.string.isRequired,
};
