import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Home, ProductPage, PartnerPage, AllProducts } from '../pages';
import './Router.css';

function locationListener({ pathname }) {
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
}

function Router() {
  const location = useLocation();

  useEffect(() => {
    locationListener(location);
  }, [location]);

  return (
    <Routes location={location}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/produto/:productName" element={<ProductPage />} />
      <Route path="/parceiro/:partnerName/:subpageId" element={<PartnerPage />} />
      <Route path="/produto/todososprodutos" element={<AllProducts />} />
    </Routes>
  );
}

export default Router;
