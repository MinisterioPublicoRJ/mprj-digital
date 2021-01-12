import React, { useState } from 'react';
import Pagination from '../pagination/Pagination';
import ProductItem from './productItem/ProductItem';
import './Products.css';
import { PRODUCTS_CONSTANTS } from './ProductsConstants';

export default function Products() {
  function handlePageClick(page) {
    return page;
  }

  const [productType, setProductType] = useState('');

  return (
    <div className="products">
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
        <button type="button" onClick={() => setProductType('Relatório')} className="filter-title">
          Relatórios
        </button>
        <button type="button" onClick={() => setProductType('Estudo')} className="filter-title">
          Estudos
        </button>
      </div>

      <div className="all-products">
        {PRODUCTS_CONSTANTS.filter((product) => product.type.includes(productType)).map(
          (product) => (
            <ProductItem
              key={product.id}
              title={product.title}
              text={product.text}
              imgUrl={product.imgUrl}
            />
          ),
        )}
      </div>
      <Pagination
        handlePageClick={(page) => handlePageClick(page)}
        totalPages={4}
        currentPage={1}
      />
    </div>
  );
}
