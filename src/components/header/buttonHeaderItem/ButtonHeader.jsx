import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonHeader({ title, onClick, colorTitle }) {
  return (
    <div className="section-products">
      <button style={{ color: `(${colorTitle})` }} onClick={onClick} type="button">
        {title}
      </button>
    </div>
  );
}
ButtonHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  colorTitle: PropTypes.node.isRequired,
};
