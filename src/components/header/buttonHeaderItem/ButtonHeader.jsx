/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { sectionProductsBtn, buttonHeader } from './ButtonHeader.module.css';

export default function ButtonHeader({ title, onClick }) {
  return (
    <div className={sectionProductsBtn}>
      <button className={`buttonHeader-${title}`}onClick={onClick} type="button">
        {title}
      </button>
    </div>
  );
}
ButtonHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
