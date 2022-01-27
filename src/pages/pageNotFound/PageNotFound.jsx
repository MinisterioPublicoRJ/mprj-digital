import React from 'react';
import styles from './PageNotFound.module.css';

export default function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <h2 className={styles.errorCode}>404</h2>
      <p className={styles.errorMessage}>Página não encontrada</p>
    </div>
  );
}
