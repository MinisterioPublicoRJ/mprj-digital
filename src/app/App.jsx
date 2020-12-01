import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../themes/themes.css';
import Router from '../router/Router';
import Header from '../components/header/header';
import OpenData from '../components/openData/OpenData';
import Footer from '../components/footer/footer';

const App = () => (
  <BrowserRouter>
    <Header />
    <Router />
    <OpenData />
    <Footer />
  </BrowserRouter>
);

export default App;
