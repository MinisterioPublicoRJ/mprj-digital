import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Produto from '../pages/product/Product';
import OpenData from '../pages/openData/OpenData';

const Router = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="produto" element={<Produto />} />
    <Route path="dados-abertos" element={<OpenData />} />
  </Routes>
);

export default Router;
