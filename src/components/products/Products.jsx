import React, { useState } from 'react';
import Pagination from '../pagination/Pagination';
import './Products.css';

export default function Products() {
  function handlePageClick(number) {
    return number;
  }

  const [productsList, setProductsList] = useState(populateProductsList());

  function populateProductsList() {
    const list = [];
    setProductsList(list);
    return list;
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
      <div className="all-products">
        Todos os produtos
        {productsList}
      </div>
      <Pagination
        handlePageClick={(page) => handlePageClick(page)}
        totalPages={5}
        currentPage={1}
      />
    </div>
  );
}
