import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import '../themes/themes.css';

import Router from '../router/Router';
import { Footer, Navbar } from '../components';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Router />
    <Footer />
  </BrowserRouter>
);

export default App;
