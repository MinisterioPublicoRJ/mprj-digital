import React from 'react';
import ReactGA from 'react-ga';

import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Router from '../router/Router';
import { Footer, Navbar } from '../components';
import '../themes/themes.css';

const App = () => {
  const trackingCode = process.env.ANALYTICS_CODE;
  ReactGA.initialize(trackingCode);
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
