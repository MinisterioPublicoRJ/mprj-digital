import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../themes/themes.css';
import Router from '../router/Router';
import Header from '../components/header/Header';
import Footer from '../components/footer/footer';
import Mprj from '../components/mprj/Mprj';
import Partners from '../components/partners/Partners';

const App = () => (
  <BrowserRouter>
    <Header />
    <Mprj />
    <Partners />
    <Router />
    <Footer />
  </BrowserRouter>
);

export default App;
