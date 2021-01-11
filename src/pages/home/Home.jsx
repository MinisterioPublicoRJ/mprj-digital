import React from 'react';

import './Home.css';

import { Header, Mprj, OpenData, Partners, Products, Repos } from '../../components';

export default function Home() {
  return (
    <div className="home-outer">
      <Header />
      <Mprj />
      <Partners />
      <Products />
      <OpenData />
    </div>
  );
}
