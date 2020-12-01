import React from 'react';
import Pagination from '../pagination/Pagination';
import ProductItem from './productItem/ProductItem';
import './Products.css';
import { PRODUCTS_CONSTANTS } from './ProductsConstants';

export default function Products() {
  function handlePageClick(page) {
    return page;
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
      <div className="products-filter-titles">
        <div className="filter-title"> Todos os produtos </div>
      </div>

      <div className="all-products">
        {PRODUCTS_CONSTANTS.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            text={product.text}
            imgUrl={product.imgUrl}
          />
        ))}
      </div>
      <Pagination
        handlePageClick={(page) => handlePageClick(page)}
        totalPages={5}
        currentPage={1}
      />
    </div>
  );
}
