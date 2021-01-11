import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import '../themes/themes.css';

import Router from '../router/Router';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Router />
    <Footer />
  </BrowserRouter>
);

export default App;
