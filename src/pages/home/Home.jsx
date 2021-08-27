import React from 'react';

import './Home.css';
import HomeContextProvider from './HomeContext';
import { Header, Mprj, OpenData, Partners, Products } from '../../components';

export default function Home() {
  return (
    <HomeContextProvider>
      <div className="home-outer">
        <Header />
        <Mprj />
        <Partners />
        <Products />
        <OpenData />
      </div>
    </HomeContextProvider>
  );
}
