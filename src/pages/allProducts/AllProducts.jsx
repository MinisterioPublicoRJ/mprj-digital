import React, { useState, useEffect } from 'react';
import Pagination from '../../components/pagination/Pagination';
import ProductItem from '../../components/products/productItem/ProductItem';
import {
  productsClass,
  productsTitle,
  allProducts,
} from '../../components/products/Products.module.css';
import { getProductComponentData } from '../../api/api';

export default function AllProducts() {
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

  if (!loading && !products) {
    return null;
  }

  return (
    <section className={productsClass} style={{ marginTop: '40px' }}>
      <h1 className={productsTitle}>Todos os Produtos</h1>
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
