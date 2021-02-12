import React from 'react';
import PropTypes from 'prop-types';
import './DataProductItem.css';

export default function DataProductItem({ header, text, imgUrl, id, textBtn }) {
  return (
    <div className="productPage-Data">
      <div className="productPage-body-organ-texts">
        <h3>{header}</h3>
        <span>{text}</span>
      </div>
      <div className="productPage-body-service-all">
        <div className="productPage-body-service">
          <img src={imgUrl} alt={id} />
        </div>
        <button type="button">{textBtn}</button>
      </div>
    </div>
  );
}
DataProductItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textBtn: PropTypes.string.isRequired,
};
