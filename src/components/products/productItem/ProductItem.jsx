import React, { useState } from 'react';
import './ProductItem.css';

import PropTypes from 'prop-types';

export default function ProductItem({ products }) {
  const [productType, setProductType] = useState('');

  return (
    <>
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
        {products
          .filter((product) => product.type.includes(productType))
          .map((product) => (
            <div className="product" key={product.id}>
              <a href={product.url} target="new" rel="noreferrer">
                <img src={process.env.PUBLIC_URL + product.imgUrl} alt={product.title} />
              </a>
              <h4>{product.title}</h4>
              <p className="text">{product.text}</p>
            </div>
          ))}
      </div>
    </>
  );
}
ProductItem.propTypes = {
  products: PropTypes.node.isRequired,
};
