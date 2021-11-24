import React from 'react';
import ReactGA from 'react-ga';

import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Router from '../router/Router';
import { Footer, Navbar } from '../components';
import '../themes/themes.css';

const App = () => {
  // will always be empty outside of prod
  const trackingId = process.env.REACT_APP_ANALYTICS_CODE;
  ReactGA.initialize(trackingId);
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
