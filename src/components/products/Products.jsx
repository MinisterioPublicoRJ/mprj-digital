import React from 'react';
import Pagination from '../pagination/Pagination';
import './Products.css';

export default function Products() {
  function handlePageClick(number) {
    return number;
  }
  return (
    <div className="products">
      <h1 className="products-title">Produtos</h1>
      <p className="products-text">
        Painéis, estudos, relatórios e os mais variados formatos de soluções gerados pelos nossos
        parceiros.
      </p>
      <p className="products-text">
        Fique a vontade para explorar cada um deles, e não esqueça de mandar seu feedback
      </p>
      <Pagination
        handlePageClick={(page) => handlePageClick(page)}
        totalPages={5}
        currentPage={1}
      />
    </div>
  );
}
