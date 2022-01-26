// import React, { useEffect, useState } from 'react';
import React from 'react';
import styles from './AllProducts.module.css';
import Produtos from '../../components/products/Products';

export default function AllProducts() {
  // const [allProductsNavbarData, setallProductsNavbarData] = useState();

  // async function loadAllProductsNavbarData() {
  //   const productResponse = await getProductNavbarData();
  //   if (productResponse) {
  //     setProductNavbarData(productResponse);
  //   }
  // }

  // useEffect(() => loadAllProductsNavbarData(), []);

  return (
    <div className={styles.allProductsContainer}>
      <h1>Todos os produtos</h1>
      <Produtos />
    </div>
  );
}
