import React from 'react';
import { useParams } from 'react-router-dom';

import './ProductPage.css';
import PRODUCTS_CONST from './productsConsts';

export default function Produto() {
  const { key } = useParams();
  const { background, header, title, service, organ } = PRODUCTS_CONST[key];
  const { icon: Icon } = header;

  return (
    <article className="productPage-outer">
      <div className="productPage-img" style={{ backgroundImage: `url(${background})` }} />
      <div className="productPage-presentation">
        <Icon />
        <h2>{header.title}</h2>
        <p>{header.subtitle}</p>
      </div>
      <div className="productPage-bodyFilling" />
      <div className="productPage-body-main">
        <h1>{title}</h1>
        <div className="productPage-body-service">
          <p>{service}</p>
          <span>Serviço</span>
        </div>
        <div className="productPage-body-organ">
          <p>{organ}</p>
          <span>Orgão Responsável</span>
        </div>
      </div>
    </article>
  );
}
