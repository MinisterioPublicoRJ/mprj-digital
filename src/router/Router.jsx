import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Products from '../components/products/Products';

const Router = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="produto" element={<Products />} />
  </Routes>
);

export default Router;
