/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import './DataProductItem.css';

export default function DataProductItem({ subsectionTitle, text, imgUrl, id, textBtn, url }) {
  return (
    <>
      <div className="productItem-texts">
        <h3>
          title:
          {subsectionTitle}
        </h3>
        <p>{text}</p>
      </div>
      <div className="productItem-action">
        <img src={imgUrl} alt={id} />
        <a href={url} target="new" rel="noreferrer">
          {textBtn}
        </a>
      </div>
    </>
  );
}

DataProductItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  subsectionTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textBtn: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
