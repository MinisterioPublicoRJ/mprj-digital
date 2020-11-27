import React, { useState } from 'react';
import Pagination from '../pagination/Pagination';
import ProductItem from './productItem/ProductItem';
import './Products.css';
import { PRODUCTS_CONSTANTS } from './ProductsConstants';

export default function Products() {
  function handlePageClick(page) {
    if (PRODUCTS_CONSTANTS[page * 10]) setProductsList(populateProductsList(page * 10));
    return page;
  }

  const [productsList, setProductsList] = useState(populateProductsList(0));

  function populateProductsList(firstItem) {
    const list = [];
    for (let index = firstItem; index < PRODUCTS_CONSTANTS.length; index += 1) {
      const product = PRODUCTS_CONSTANTS[index];
      list.push(<ProductItem title={product.title} text={product.text} imgUrl={product.imgUrl} />);
    }
    console.log('PRODUCTS_CONSTANTS', PRODUCTS_CONSTANTS);
    console.log('list', list);
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
      <div className="all-products">Todos os produtos</div>
      <Pagination
        handlePageClick={(page) => handlePageClick(page)}
        totalPages={5}
        currentPage={1}
      />
    </div>
  );
}
