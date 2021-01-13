import React from 'react';
import PropTypes from 'prop-types';

export default function NavHeader({ title1, title2 }) {
  return (
    <div className="section-products">
      <button type="button">{title1}</button>
      <p>{title2}</p>
    </div>
  );
}
NavHeader.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
};
