import React from 'react';
import PropTypes from 'prop-types';
import './BgHeader.css';

export default function BgHeader({ imgBg }) {
  return (
    <div className="section-products-bg">
      <img alt={imgBg} src={imgBg} />
    </div>
  );
}
BgHeader.propTypes = {
  imgBg: PropTypes.string.isRequired,
};
