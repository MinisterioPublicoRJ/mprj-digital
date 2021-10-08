/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataProduct from './dataProductItem/DataProductItem';
import './ProductPage.css';
import { getProductPageData } from '../../api/api';

export default function Produto() {
  const { productName } = useParams();
  const [changeData, setchangeData] = useState();
  const [productData, setProductData] = useState();

  async function loadProductData() {
    const result = await getProductPageData(productName);
    if (result) {
      setProductData(result);
      setchangeData(result.subsectionsArray[0].subsectionTitle);
    }
  }

  useEffect(() => loadProductData(), [productName]);

  return productData ? (
    <article className="productPage-outer">
      <div
        className="productPage-img"
        style={{ backgroundImage: `url(${productData.bannerUrl})` }}
      />
      <div className="productPage-presentation">
        <img src={productData.icon} alt={`Ícone ${productData.title}`} />
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
        {productData.subsectionsArray.map(({ subsectionTitle, subsectionDescription }) => (
          <button
            key={subsectionTitle}
            onClick={() => {
              setchangeData(subsectionTitle);
            }}
            className={`productPage-navButtons ${
              subsectionTitle === changeData ? 'productPage-navButtons-active' : ''
            }`}
            type="button"
          >
            {subsectionTitle}
          </button>
        ))}
      </div>
      <DataProduct
        {...productData.subsectionsArray.find(
          (subsection) => subsection.subsectionTitle === changeData,
        )}
        textBtn={`Acessar ${productData.title}`}
        url={productData.url}
      />
    </article>
  ) : (
    <h1>Carregando</h1>
  );
}
