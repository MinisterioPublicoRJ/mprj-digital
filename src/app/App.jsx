import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Router from '../router/Router';
import { Footer, Navbar } from '../components';
import '../themes/themes.css';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Router />
    <Footer />
  </BrowserRouter>
);

export default App;
