import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../router/Router';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
