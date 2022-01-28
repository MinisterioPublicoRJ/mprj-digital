/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';
import ProductItem from '../../components/products/productItem/ProductItem';
import styles from './AllProducts.module.css';
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
    <section className={styles.allProductsClass}>
      <h1 className={styles.productsTitle}>Todos os Produtos</h1>
      <div className={styles.allProducts}>
        {loading
          ? 'Carregando...'
          : products.map(({ name, title, description, imageSrc }) => (
            <div className={styles.allProductsCard} >
              <div>
                <img src={imageSrc} alt={title} />
                <p>{title}</p>
              </div>
              <button type="button" key={name}>
                <Link to={`/produto/${name}`}>
                  Conheça o produto
                </Link>
              </button>
            </div>
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
