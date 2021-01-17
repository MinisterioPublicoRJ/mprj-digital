import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonHeader({ title, onClick }) {
  return (
    <div className="section-products">
      <button onClick={onClick} type="button">
        {title}
      </button>
    </div>
  );
}
ButtonHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
