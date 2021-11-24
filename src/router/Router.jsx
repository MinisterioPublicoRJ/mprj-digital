import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Home, ProductPage, PartnerPage } from '../pages';

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
      <Route exact path="/produto/:productName" element={<ProductPage />} />
      <Route path="/parceiro/:partnerName/:subpageId" element={<PartnerPage />} />
    </Routes>
  );
}

export default Router;
