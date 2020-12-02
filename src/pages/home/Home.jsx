import React from 'react';
import Header from '../../components/header/Header';
import Mprj from '../../components/mprj/Mprj';
import Partners from '../../components/partners/Partners';
import OpenData from '../../components/openData/OpenData';

export default function Home() {
  return (
    <>
      <Header />
      <Mprj />
      <Partners />
      <OpenData />
    </>
  );
}
