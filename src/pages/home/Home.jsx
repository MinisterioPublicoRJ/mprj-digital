import React, { useEffect } from 'react';

import './Home.css';
import HomeContextProvider from './HomeContext';
import { Header, Mprj, OpenData, Partners, Products, Explore } from '../../components';
import { getProductPageData } from '../../api/api';

export default function Home() {
  useEffect(() => getProductPageData('parquet-digital'), []);

  return (
    <HomeContextProvider>
      <div className="home-outer">
        <Header />
        <Explore />
        <Mprj />
        <Partners />
        <Products />
        <OpenData />
      </div>
    </HomeContextProvider>
  );
}
