import React from 'react';
import PropTypes from 'prop-types';
import { sectionProductsBtn, buttonMprj, buttonParquet } from './ButtonHeader.module.css';

export default function ButtonHeader({ title, onClick, colorIcon, id }) {
  return (
    <div className={sectionProductsBtn}>
      <button
        onClick={onClick}
        type="button"
        className={`${id === 'MPRJDigital' ? `{${buttonMprj}}` : `{${buttonParquet}}`}`}
      >
        {title}
      </button>
    </div>
  );
}
ButtonHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  colorIcon: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
