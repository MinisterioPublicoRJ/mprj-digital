import React from 'react';
import PropTypes from 'prop-types';
import './NavHeader.css';

export default function NavHeader({
  title1,
  title2,
  title3,
  title4,
  corTitleBtn,
  icon1,
  icon2,
  icon3,
  icon4,
  titleBtn,
  colorBtn,
}) {
  return (
    <div className="section-products-item">
      <img alt={title1} src={icon1} />
      <p>{title1}</p>
      <img alt={title2} src={icon2} />
      <p>{title2}</p>
      <img alt={title3} src={icon3} />
      <p>{title3}</p>
      <img alt={title4} src={icon4} />
      <p>{title4}</p>
      <button
        style={{
          backgroundColor: colorBtn,
          color: corTitleBtn,
          height: '40px',
          width: '164px',
        }}
        type="button"
      >
        {titleBtn}
      </button>
    </div>
  );
}
NavHeader.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  title4: PropTypes.string.isRequired,
  titleBtn: PropTypes.string.isRequired,
  corTitleBtn: PropTypes.node.isRequired,
  colorBtn: PropTypes.node.isRequired,
  icon1: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired,
  icon3: PropTypes.string.isRequired,
  icon4: PropTypes.string.isRequired,
};
