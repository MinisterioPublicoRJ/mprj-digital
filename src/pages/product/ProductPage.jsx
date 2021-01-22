import React from 'react';

import './ProductPage.css';

export default function Produto() {
  return (
    <article className="productPage-outer">
      <div className="productPage-map" />
      <div className="productPage-presentation">here goes explanation!</div>
      <div className="productPage-body">here goes all the data!</div>
    </article>
  );
}
