import React, { useState, useEffect } from 'react';
import Pagination from '../pagination/Pagination';
import ProductItem from './productItem/ProductItem';
import {
  productsClass,
  productsTitle,
  productsGenDescriptionText,
  productsFilterWrapper,
  productsFilterTitle,
  allProducts,
} from './Products.module.css';
import { getProductComponentData } from '../../api/api';
import { Loading, Error } from '..';

export default function Products() {
  const perPage = 8;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [productType, setProductType] = useState('');
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, [currentPage, productType]);

  async function loadProducts() {
    try {
      const nextPos = (currentPage - 1) * perPage;
      const productFilter = productType ? `product_category:${productType}` : productType;
      const { total, productsArray } = await getProductComponentData(nextPos, productFilter);
      setProducts(productsArray);
      setTotalPages(Math.ceil(total / perPage));
    } catch (e) {
      setFailed(true);
      setProducts(null);
    } finally {
      setLoading(false);
    }
  }

  function handlePageClick(nextPage) {
    setCurrentPage(nextPage);
  }

  return (
    <section className={productsClass} id="produtos">
      <h1 className={productsTitle}>Produtos</h1>
      <p className={productsGenDescriptionText}>
        Painéis, estudos, relatórios e os mais variados formatos de soluções gerados pelos nossos
        parceiros. Fique a vontade para explorar cada um deles, e não esqueça de mandar seu
        feedback, ficaremos muito feliz em recebê-lo.
      </p>
      <div className={productsFilterWrapper}>
        <button type="button" onClick={() => setProductType('')} className={productsFilterTitle}>
          Todos os produtos
        </button>
        <button type="button" onClick={() => setProductType('painel')} className={productsFilterTitle}>
          Painéis
        </button>
        <button type="button" onClick={() => setProductType('relatorio')} className={productsFilterTitle}>
          Relatórios
        </button>
        <button type="button" onClick={() => setProductType('estudo')} className={productsFilterTitle}>
          Estudos
        </button>
      </div>
      <>
        {(loading && !failed) && (
          <Loading />
        )}
        {(failed) && (
          <Error />
        )}
        {(!loading && !failed) && (
          <div className={allProducts}>
            {products.map(({ name, title, description, imageSrc }) => (
              <ProductItem
                key={name}
                name={name}
                title={title}
                description={description}
                imageSrc={imageSrc}
              />
            ))}
          </div>
        )}
      </>
      <Pagination
        handlePageClick={(page) => handlePageClick(page)}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </section>
  );
}
