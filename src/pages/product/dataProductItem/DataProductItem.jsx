/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import './DataProductItem.css';

export default function DataProductItem({
  subsectionTitle, subsectionDescription, imgUrl, textBtn, url,
}) {
  return (
    <>
      <div className="productItem-texts">
        <h3>
          {subsectionTitle}
        </h3>
        <p>{subsectionDescription}</p>
      </div>
      <div className="productItem-action">
        <img src={imgUrl} alt={subsectionTitle} />
        <a href={url} target="new" rel="noreferrer">
          {textBtn}
        </a>
      </div>
    </>
  );
}

DataProductItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  subsectionTitle: PropTypes.string.isRequired,
  subsectionDescription: PropTypes.string.isRequired,
  textBtn: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
