/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import { getProductPageData } from '../../api/api';
import iconProductDefault from '../../assets/produto-icon-default.svg';
import bgProductDefault from '../../assets/produto-bg-default.png';
import { Loading, Error } from '../../components';

export default function Produto() {
  const { productName } = useParams();
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  async function loadProductData() {
    try {
      const result = await getProductPageData(productName);
      setProductData(result);
    } catch (e) {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => loadProductData(), [productName]);

  return (
    <>
      {loading && !failed && <Loading />}
      {failed && <Error />}
      {!loading && !failed && (
        <article>
          <div className="productPage-outer">
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
            <div className="productPage-presentation-thumbnailUrl">
              <img src={productData.thumbnailUrl} alt="logo-produto" />
              <div className="productPage-presentation-button">
                {productData.url ? (
                  <a href={productData.url} target="_blank" rel="noopener       noreferrer">
                    Acessar
                  </a>
                ) : null}
              </div>
            </div>
          </div>
          <div className="productPage-wrap">
            <div className="productPage-wrap-texts">
              <span>{productData.organ}</span>
              <p>Orgão Responsável</p>
              <h1>{productData.title}</h1>
              <h4>{productData.service}</h4>
              <p className="productPage-text-service">Serviço</p>
            </div>
            <div className="productPage-tabNavigation">
              {productData.subsectionsArray.map(({ subsectionDescription }, index) => (
                <>
                  <div>
                    <h2>
                      {index === 0 && 'Por que ?'}
                      {index === 1 && 'A ferramenta'}
                      {index === 2 && 'Dados'}
                    </h2>
                    <p>{subsectionDescription}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </article>
      )}
    </>
  );
}
