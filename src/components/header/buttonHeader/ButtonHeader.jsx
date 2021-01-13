import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonHeader({ title }) {
  return (
    <div className="section-products">
      <button type="button">{title}</button>
    </div>
  );
}
ButtonHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
