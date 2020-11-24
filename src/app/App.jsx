import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../themes/themes.css';
import Router from '../router/Router';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Products } from '../pages';

const App = () => (
  <BrowserRouter>
    <Header />
    <Router />
    <Products />
    <Footer />
  </BrowserRouter>
);

export default App;
