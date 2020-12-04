import React from 'react';
import Header from '../../components/header/header';
import Mprj from '../../components/mprj/Mprj';
import Partners from '../../components/partners/Partners';
import OpenData from '../../components/openData/OpenData';
import Products from '../../components/products/Products';

export default function Home() {
  return (
    <>
      <Header />
      <Mprj />
      <Partners />
      <Products />
      <OpenData />
    </>
  );
}
