import React from 'react';
import PropTypes from 'prop-types';
import './DataProductItem.css';

export default function DataProductItem({ header, text, imgUrl, info, title, subtitle }) {
  return (
    <div className="productPage-bodyAll-Texts">
      <div className="productPage-bodyFilling-texts">
        <p>{title}</p>
        <span>{subtitle}</span>
        <span>{info}</span>
      </div>
      <div className="productPage-body-organ-texts">
        <h3>{header}</h3>
        <span>{text}</span>
      </div>
      <div className="productPage-body-service-all">
        <div className="productPage-body-service">
          <img src={imgUrl} alt={title} />
        </div>
        <button type="button">{title}</button>
      </div>
    </div>
  );
}
DataProductItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
