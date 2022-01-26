import React from 'react';
import styles from './SectionTitleProdutos.module.css';

export default function SectionTitleProducts() {
  return (
    <section className={styles.productsClass} id="produtos">
      <h1 className={styles.productsTitle}>Produtos</h1>
      <p className={styles.productsGenDescriptionText}>
        Painéis, estudos, relatórios e os mais variados formatos de soluções gerados pelos nossos
        parceiros. Fique a vontade para explorar cada um deles, e não esqueça de mandar seu
        feedback, ficaremos muito feliz em recebê-lo.
      </p>
    </section>
  );
}
