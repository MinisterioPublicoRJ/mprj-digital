import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Produto from '../pages/product/Product';

const Router = () => (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="produto" element={<Produto />} />
    </Routes>
);

export default Router;