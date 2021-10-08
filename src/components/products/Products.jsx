import React, { useState, useEffect } from 'react';
import Pagination from '../pagination/Pagination';
import ProductItem from './productItem/ProductItem';
import './Products.css';
import { getProductComponentData } from '../../api/api';

export default function Products() {
  const perPage = 8;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [productType, setProductType] = useState('');
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
      setProducts(null);
    } finally {
      setLoading(false);
    }
  }

  function handlePageClick() {
    const nextPage = currentPage + 1;
    if (nextPage < 1 || nextPage > totalPages) return;
    setCurrentPage(nextPage);
  }

  // if the products fail to load, don't show component at all
  if (!loading && !products) {
    return null;
  }

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
        <button type="button" onClick={() => setProductType('painel')} className="filter-title">
          Painéis
        </button>
        <button type="button" onClick={() => setProductType('relatorio')} className="filter-title">
          Relatórios
        </button>
        <button type="button" onClick={() => setProductType('estudo')} className="filter-title">
          Estudos
        </button>
      </div>
      <div className="all-products">
        {loading
          ? 'Carregando...'
          : products.map(({ name, title, description, imageSrc }) => (
            <ProductItem
              key={name}
              name={name}
              title={title}
              description={description}
              imageSrc={imageSrc}
            />
          ))}
      </div>
      <Pagination
        handlePageClick={() => handlePageClick()}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </section>
  );
}
