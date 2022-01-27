import React from 'react';
import styles from './Error.module.css';

function Error() {
  return (
    <div className={styles.errorWrapper}>
      <h2 className={styles.errorTitle}>
        Error
        <span className={styles.exclamationMark}>!</span>
      </h2>
      <h2 className={styles.errorText}>Por favor, verifique sua conexão com a Internet.</h2>
    </div>
  );
}

export default Error;
