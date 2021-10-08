/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataProduct from './dataProductItem/DataProductItem';
import './ProductPage.css';
import PRODUCTS_CONST from './productsConsts';
import { getProductPageData } from '../../api/api';

export default function Produto() {
  const { productName } = useParams();
  const { background, header, title, service, organ, tabs } = PRODUCTS_CONST[productName];
  const { icon: Icon } = header;
  const [changeData, setchangeData] = useState();
  const [productData, setProductData] = useState();

  async function loadProductData() {
    const result = await getProductPageData(productName);
    setProductData(result);
  }

  useEffect(() => setchangeData(tabs[0].id), [tabs]);
  useEffect(() => console.log('productData: ', productData), [productData]);

  useEffect(() => loadProductData(), []);

  return (
    productData
      ? (
        <article className="productPage-outer">
          <div className="productPage-img" style={{ backgroundImage: `url(${background})` }} />
          <div className="productPage-presentation">
            <Icon />
            <h2>{productData.subtitle}</h2>
            <p>{productData.description}</p>
          </div>
          <h1 className="productPage-productName">{productData.title}</h1>
          <div className="productPage-owner">
            <span>{productData.organ}</span>
            <span>Orgão Responsável</span>
          </div>
          <div className="productPage-service">
            <span>{productData.service}</span>
            <span>Serviço</span>
          </div>
          <div className="productPage-tabNavigation">
            {tabs.map(({ id, subtitle }) => (
              <button
                key={id}
                onClick={() => {
                  setchangeData(id);
                }}
                className={`productPage-navButtons ${id === changeData ? 'productPage-navButtons-active' : ''
                }`}
                type="button"
              >
                {subtitle}
              </button>
            ))}
          </div>
          <DataProduct {...tabs.find((tab) => tab.id === changeData)} />
        </article>
      )
      : <div>loading</div>
  );
}
