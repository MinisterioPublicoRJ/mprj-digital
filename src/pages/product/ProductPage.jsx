/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DataProduct from './dataProductItem/DataProductItem';
import './ProductPage.css';
import { getProductPageData } from '../../api/api';
import iconProductDefault from '../../assets/produto-icon-default.svg';
import bgProductDefault from '../../assets/produto-bg-default.png';

export default function Produto() {
  const { productName } = useParams();
  const [changeData, setchangeData] = useState();
  const [productData, setProductData] = useState();
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const subsectionTitles = ['Por que ?', 'A ferramenta', 'Os dados'];

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
      <div className="productPage-img">
        {!productData.bannerUrl ? (
          <img src={bgProductDefault} alt="bg-default" />
        ) : (
          <img src={productData.bannerUrl} alt={productData.title} />
        )}
      </div>
      <div className="productPage-presentation">
        {!productData.icon ? (
          <img src={iconProductDefault} alt="icone-defalut" />
        ) : (
          <img src={productData.icon} alt={`Ícone ${productData.title}`} />
        )}
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
        {productData.subsectionsArray.map(({ subsectionTitle }, index) => (
          <button
            key={subsectionTitle}
            onClick={() => {
              setchangeData(subsectionTitle);
              setCurrentProductIndex(index);
            }}
            className={`productPage-navButtons ${
              subsectionTitle === changeData ? 'productPage-navButtons-active' : ''
            }`}
            type="button"
          >
            {index === 0 && 'Por que ?'}
            {index === 1 && 'A ferramenta'}
            {/* index === 2 && 'Os dados' */}
          </button>
        ))}
      </div>
      <DataProduct
        {...productData.subsectionsArray.find(
          (subsection) => subsection.subsectionTitle === changeData,
        )}
        subsectionTitle={subsectionTitles[currentProductIndex]}
        textBtn={`Acessar ${productData.title}`}
        url={productData.url}
        thumbnailUrl={productData.thumbnailUrl}
      />
    </article>
  ) : (
    'Carregando'
  );
}
