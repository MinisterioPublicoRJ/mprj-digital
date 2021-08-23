import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, ProductPage, PartnerPage } from '../pages';

const Router = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/produto/:key" element={<ProductPage />} />
    <Route path="/parceiro/:partnerId/:subpageId" element={<PartnerPage />} />
    {/* <Route path=":subpageId" element={<PartnerPage />} />
      <Route path="" element={<PartnerPage />} />
    </Route> */}
  </Routes>
);

export default Router;
