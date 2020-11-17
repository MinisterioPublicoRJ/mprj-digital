import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Produto from '../pages/product/Product';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="produto" element={<Produto/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
