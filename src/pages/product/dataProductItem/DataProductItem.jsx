/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import './DataProductItem.css';
import miniaturaDefault from '../../../assets/produto-miniatura-default.png';

export default function DataProductItem({
  subsectionTitle,
  subsectionDescription,
  imgUrl,
  textBtn,
  url,
  thumbnailUrl,
}) {
  let image = <img src={miniaturaDefault} alt="icon-miniatura-default" />;
  if (imgUrl) {
    image = <img src={imgUrl} alt={`imagem ${subsectionTitle} ${subsectionDescription}`} />;
  } else if (thumbnailUrl) {
    image = <img src={thumbnailUrl} alt={subsectionTitle} />;
  }
  return (
    <>
      <div className="productItem-texts">
        <h3>{subsectionTitle}</h3>
        <p>{subsectionDescription}</p>
      </div>
      <div className="productItem-action">
        {
          image
        }
        {url ? (
          <a href={url} target="_blank" rel="noopener       noreferrer">
            {textBtn}
          </a>
        ) : null}
      </div>
    </>
  );
}

DataProductItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  subsectionTitle: PropTypes.string.isRequired,
  subsectionDescription: PropTypes.string.isRequired,
  textBtn: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
