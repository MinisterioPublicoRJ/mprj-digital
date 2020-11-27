import React from 'react';
import './ProductItem.css';

export default function productItem(title, text, imgUrl) {
  return (
    <div className="product">
      <img url={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
