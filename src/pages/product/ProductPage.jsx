/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DataProduct from './dataProductItem/DataProductItem';
import ButtonProduct from './buttonProductItem/ButtonProduct';
import './ProductPage.css';
import PRODUCTS_CONST from './productsConsts';
import BUTTON_PRODUCT_DATA from './buttonProductItem/buttonProductData';

export default function Produto() {
  const { key } = useParams();
  const { background, header, title, service, organ, tabs } = PRODUCTS_CONST[key];
  const { icon: Icon } = header;
  const [changeData, setchangeData] = useState('Farol');

  return (
    <article className="productPage-outer">
      <div className="productPage-img" style={{ backgroundImage: `url(${background})` }} />
      <div className="productPage-presentation">
        <Icon />
        <h2>{header.title}</h2>
        <p>{header.subtitle}</p>
      </div>
      <div className="productPage-body-main">
        {BUTTON_PRODUCT_DATA.map(({ id }) => (
          <ButtonProduct
            onClick={() => {
              setchangeData(id);
            }}
            key={id}
            titleBtn={id}
          />
        ))}
        <h1>{title}</h1>
        <div className="productPage-bodyAll-Texts">
          <div className="productPage-bodyFilling">
            <p>{organ}</p>
            <span>Orgão Responsável</span>
          </div>
          <div className="productPage-body-organ">
            <p>{service}</p>
            <span>Serviço</span>
          </div>
        </div>
        <DataProduct {...tabs[0]} />
      </div>
    </article>
  );
}
