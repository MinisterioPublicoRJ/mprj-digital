import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, ProductPage, PartnerPage } from '../pages';

const Router = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/produto" element={<ProductPage />} />
    <Route exact path="/parceiro/:key" element={<PartnerPage />} />
  </Routes>
);

export default Router;
