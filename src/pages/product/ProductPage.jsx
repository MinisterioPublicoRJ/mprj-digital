/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import DataProduct from './dataProductItem/DataProductItem';
import './ProductPage.css';
import PRODUCTS_CONST from './productsConsts';

export default function Produto() {
  const { key } = useParams();
  const { background, header, title, id, subpages, service, organ, tabs } = PRODUCTS_CONST[key];
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
        {subpages.map((subpage) => (
          <div key={subpage.id}>
            <NavLink
              className="productPage-subPage-link"
              activeClassName="active"
              to={`/parceiro/${key}/${subpage.id}`}
            >
              {subpage.titleBtn}
            </NavLink>
          </div>
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
          <div className="productPage-body-organ" />
        </div>
        <div className="productPage-section-buttons">
          <div className="btns-product">
            <button className="btn-product-text" type="button">
              {tabs[0].title}
            </button>
            <button
              onClick={() => {
                setchangeData(id);
              }}
              className="btn-product-text"
              type="button"
            >
              {tabs[0].product}
            </button>
            <button className="btn-product-text" type="button">
              {tabs[0].subtitle}
            </button>
          </div>
          <DataProduct {...tabs.find((btn) => btn.id === changeData)} />
        </div>
      </div>
    </article>
  );
}
