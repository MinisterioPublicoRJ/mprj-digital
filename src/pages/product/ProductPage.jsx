/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductPageData } from '../../api/api';
import iconProductDefault from '../../assets/produto-icon-default.svg';
import bgProductDefault from '../../assets/produto-bg-default.png';
import { Loading, Error } from '../../components';
import styles from './ProductPage.module.css';

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
          <div className={styles.productPageOuter}>
            <div className={styles.productPageImg}>
              {!productData.bannerUrl ? (
                <img src={bgProductDefault} alt="bg-default" />
              ) : (
                <img src={productData.bannerUrl} alt={productData.title} />
              )}
            </div>
            <div className={styles.productPagePresentation}>
              {!productData.icon ? (
                <img src={iconProductDefault} alt="icone-defalut" />
              ) : (
                <img src={productData.icon} alt={`Ícone ${productData.title}`} />
              )}
              <h2>{productData.subtitle}</h2>
              <p>{productData.description}</p>
              <div className={styles.productPageAccessLevel}>
                <span>Nível de acesso :</span>
                <div>
                  <p>Orgãos especificos</p>
                </div>
              </div>
            </div>
            <div className={styles.productPagePresentationThumbnailUrl}>
              <img src={productData.thumbnailUrl} alt="logo-produto" />
              <div className={styles.productPagePresentationButton}>
                {productData.url ? (
                  <a href={productData.url} target="_blank" rel="noopener       noreferrer">
                    Acessar
                  </a>
                ) : null}
              </div>
            </div>
          </div>
          <div className={styles.productPageWrap}>
            <div className={styles.productPageWrapTexts}>
              <span>{productData.organ}</span>
              <p>Orgão Responsável</p>
              <h1>{productData.title}</h1>
              <h4>{productData.service}</h4>
              <p className={styles.productPageTextService}>Serviço</p>
            </div>
            <div className={styles.productPageTabNavigation}>
              {productData.subsectionsArray.map(({ subsectionDescription, id }, index) => (
                <div key={id}>
                  <h2>
                    {index === 0 && 'Por que ?'}
                    {index === 1 && 'A ferramenta'}
                    {index === 2 && 'Documentos'}
                  </h2>
                  <p>{subsectionDescription}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      )}
    </>
  );
}
