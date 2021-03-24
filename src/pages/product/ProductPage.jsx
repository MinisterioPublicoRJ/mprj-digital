/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import DataProduct from './dataProductItem/DataProductItem';
import './ProductPage.css';
import PRODUCTS_CONST from './productsConsts';

export default function Produto() {
  const { key } = useParams();
  const { background, header, title, subpages, service, organ, tabs } = PRODUCTS_CONST[key];
  const { icon: Icon } = header;
  const [changeData, setchangeData] = useState();

  useEffect(() => setchangeData(tabs[0].id), [tabs]);

  return (
    <article className="productPage-outer">
      <div className="productPage-img" style={{ backgroundImage: `url(${background})` }} />
      <div className="productPage-presentation">
        <Icon />
        <h2>{header.title}</h2>
        <p>{header.subtitle}</p>
      </div>
      <div className="productPage-body-main">
        <div className="productPage-section-subpages">
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
        </div>
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
            {tabs.map(({ id, subtitle }) => (
              <div key={id}>
                <button
                  onClick={() => {
                    setchangeData(id);
                  }}
                  className="btn-product-text"
                  type="button"
                >
                  <span>{subtitle}</span>
                </button>
              </div>
            ))}
          </div>
          <DataProduct {...tabs.find((tab) => tab.id === changeData)} />
        </div>
      </div>
    </article>
  );
}
