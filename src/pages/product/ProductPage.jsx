import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import ButtonProduct from './buttonProduct/ButtonProduct';
import './ProductPage.css';
import PRODUCTS_CONST from './productsConsts';
import BUTTON_PRODUCT_DATA from './buttonProduct/buttonProductData';

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
          <ButtonProduct key={id} titleBtn={id}>
            {/* <NavLink to={`/parceiro/${key}`} type="button" /> */}
          </ButtonProduct>
        ))}
        <h1>{title}</h1>
        <div className="productPage-bodyAllProducts">
          <div className="productPage-bodyFilling">
            <p>{organ}</p>
            <span>Orgão Responsável</span>
            <div className="productPage-bodyFilling-texts">
              <p>{tabs[0].title}</p>
              <span>{tabs[0].subtitle}</span>
              <span>{tabs[0].info}</span>
            </div>
          </div>
          <div className="productPage-body-organ">
            <p>{service}</p>
            <span>Serviço</span>
            <div className="productPage-body-organ-texts">
              <h3>{tabs[0].header}</h3>
              <span>{tabs[0].text}</span>
            </div>
          </div>
          <div className="productPage-body-service">
            <p>{organ}</p>
            <span>Orgão Responsável</span>
          </div>
        </div>
      </div>
    </article>
  );
}
