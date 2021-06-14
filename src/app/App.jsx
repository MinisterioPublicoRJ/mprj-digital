import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import '../themes/themes.css';

import Router from '../router/Router';
import { Footer, Navbar, TalkToUs } from '../components';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Router />
    <TalkToUs />
    <Footer />
  </BrowserRouter>
);

export default App;
