/* eslint-disable */
import React, { useState, useEffect } from 'react';
import Pagination from '../pagination/Pagination';
import ProductItem from './productItem/ProductItem';
import './Products.css';
import { PRODUCTS_CONSTANTS } from './ProductsConstants';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [productsPorPage, setProductsPorPage] = useState(4);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = PRODUCTS_CONSTANTS;
      setProducts(res);
      setTotalPages(res.length / 4);
    };
    fetchData();
  }, []);

  
  function handlePageClick(nextPage) {
    if (nextPage < 1 || nextPage > totalPages) return;
    setPage(nextPage);
  }

  const lastProduct = page * productsPorPage;
  const firstProduct = lastProduct - productsPorPage;
  const currentProduct = products.slice(firstProduct, lastProduct);

  return (
    <section className="products" id="produtos">
      <h1 className="products-title">Produtos</h1>
      <p className="products-text">
        Painéis, estudos, relatórios e os mais variados formatos de soluções gerados pelos nossos
        parceiros. Fique a vontade para explorar cada um deles, e não esqueça de mandar seu
        feedback, ficaremos muito feliz em recebê-lo.
      </p>
      <ProductItem products={currentProduct} />
      <Pagination
        handlePageClick={(page) => handlePageClick(page)}
        totalPages={totalPages}
        currentPage={page}
      />
    </section>
  );
}
