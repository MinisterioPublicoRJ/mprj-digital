/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Pagination from '../pagination/Pagination';
import ProductItem from './productItem/ProductItem';
import './Products.css';
import { PRODUCTS_CONSTANTS } from './ProductsConstants';

export default function Products() {
  const [products, setProducts] = useState(PRODUCTS_CONSTANTS);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [productType, setProductType] = useState('');
  const productsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      const filteredProducts = PRODUCTS_CONSTANTS.filter((product) => product.type.includes(productType));
      setProducts(filteredProducts);
      setTotalPages(Math.ceil(filteredProducts.length / productsPerPage));
      setPage(1);
    };
    fetchData();
  }, [productType]);

  function handlePageClick(nextPage) {
    if (nextPage < 1 || nextPage > totalPages) return;
    setPage(nextPage);
  }


  const lastProduct = page * productsPerPage;
  const firstProduct = lastProduct - productsPerPage;
  const currentProductPage = products.slice(firstProduct, lastProduct);

  return (
    <section className="products" id="produtos">
      <h1 className="products-title">Produtos</h1>
      <p className="products-text">
        Painéis, estudos, relatórios e os mais variados formatos de soluções gerados pelos nossos
        parceiros. Fique a vontade para explorar cada um deles, e não esqueça de mandar seu
        feedback, ficaremos muito feliz em recebê-lo.
      </p>
      <div className="products-filter-titles">
        <button type="button" onClick={() => setProductType('')} className="filter-title active">
          Todos os produtos
        </button>
        <button type="button" onClick={() => setProductType('Painel')} className="filter-title">
          Painéis
        </button>
        <button type="button" onClick={() => setProductType('Relatorio')} className="filter-title">
          Relatórios
        </button>
        <button type="button" onClick={() => setProductType('Estudo')} className="filter-title">
          Estudos
        </button>
      </div>
      <div className="all-products">
        {currentProductPage.map((product) => (
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>
      <Pagination
        handlePageClick={(page) => handlePageClick(page)}
        totalPages={totalPages}
        currentPage={page}
      />
    </section>
  );
}
