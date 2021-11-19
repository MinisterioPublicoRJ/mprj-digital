import React from 'react';

import './Home.css';
import HomeContextProvider from './HomeContext';
import { Header, Mprj, OpenData, Partners, Products, Explore, TalkToUs } from '../../components';

export default function Home() {
  return (
    <HomeContextProvider>
      <div className="home-outer">
        <Header />
        <Explore />
        <Mprj />
        <Products />
        <Partners />
        <OpenData />
        <TalkToUs />
      </div>
    </HomeContextProvider>
  );
}
