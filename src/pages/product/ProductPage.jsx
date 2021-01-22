import React from 'react';
import { useParams } from 'react-router-dom';

import './ProductPage.css';
import PRODUCTS_CONST from './productsConsts';

export default function Produto() {
  const { key } = useParams();
  const { background } = PRODUCTS_CONST[key];

  return (
    <article className="productPage-outer">
      <div className="productPage-img" style={{ backgroundImage: `url(${background})` }} />
      <div className="productPage-presentation">here goes explanation!</div>
      <div className="productPage-body">here goes all the data!</div>
    </article>
  );
}
