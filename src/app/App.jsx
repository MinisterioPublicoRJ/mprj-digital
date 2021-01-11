import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import '../themes/themes.css';

import Router from '../router/Router';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Router />
    <Footer />
  </BrowserRouter>
);

export default App;
