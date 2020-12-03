import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../themes/themes.css';
import Router from '../router/Router';
import Header from '../components/header/Header';
import OpenData from '../components/openData/OpenData';
import Footer from '../components/footer/footer';
import Mprj from '../components/mprj/Mprj';
import Partners from '../components/partners/Partners';
import Products from '../components/products/Products';

const App = () => (
  <BrowserRouter>
    <Header />
    <Mprj />
    <Partners />
    <Products />
    <Router />
    <OpenData />
    <Footer />
  </BrowserRouter>
);

export default App;
