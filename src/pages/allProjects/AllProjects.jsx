import React from 'react';
import styles from './AllProjects.module.css';
import Produtos from '../../components/products/Products';

export default function AllProducts() {
  return (
    <div className={styles.allProductsContainer}>
      <h1>Todos os produtos</h1>
      <Produtos />
    </div>
  );
}
  