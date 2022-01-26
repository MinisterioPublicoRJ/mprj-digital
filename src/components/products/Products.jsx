import React, { useState, useEffect } from 'react';
import Pagination from '../pagination/Pagination';
import ProductItem from './productItem/ProductItem';
import SectionTitleProdutos from '../sectionTitle/SectionTitleProdutos';
import {
  productsClass,
  productsFilterWrapper,
  productsFilterTitle,
  allProducts,
} from './Products.module.css';
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

  function handlePageClick(nextPage) {
    setCurrentPage(nextPage);
  }

  // if the products fail to load, don't show component at all
  if (!loading && !products) {
    return null;
  }

  return (
    <section className={productsClass} id="produtos">
      <SectionTitleProdutos />
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
      <div className={allProducts}>
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
        handlePageClick={(page) => handlePageClick(page)}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </section>
  );
}
