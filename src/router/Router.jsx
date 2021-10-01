import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Home, ProductPage, PartnerPage } from '../pages';

import './Router.css';

function Router() {
  const location = useLocation();

  return (
    /* <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={400}>
        <Routes location={location}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/produto/:key" element={<ProductPage />} />
          <Route path="/parceiro/:partnerId/:subpageId" element={<PartnerPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup> */
    <Routes location={location}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/produto/:key" element={<ProductPage />} />
      <Route path="/parceiro/:partnerId/:subpageId" element={<PartnerPage />} />
    </Routes>
  );
}

export default Router;
