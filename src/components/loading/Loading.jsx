import React from 'react';
import {
  wrapperLoading,
  textLoading,
} from './Loading.module.css';

export default function Loading() {
  return (
    <div className={wrapperLoading}>
      <h1 className={textLoading}>Carregando</h1>
    </div>
  );
}
