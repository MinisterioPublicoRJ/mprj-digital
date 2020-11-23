import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../router/Router';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Router />
    <Footer />
  </BrowserRouter>
);

export default App;
