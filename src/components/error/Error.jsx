import React from 'react';
import styles from './Error.module.css';

function Error() {
  return (
    <div className={styles.errorWrapper}>
      <h2 className={styles.errorTitle}>
        Error
        <span className={styles.exclamationMark}>!</span>
      </h2>
      <p className={styles.errorText}>Por favor, verifique sua conexão com a Internet.</p>
    </div>
  );
}

export default Error;
