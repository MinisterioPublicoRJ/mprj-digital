/* eslint-disable */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, ProductPage, PartnerPage } from '../pages';

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

const Router = () => (
  <TransitionGroup>
     <CSSTransition
      key={location.key}
      classNames="fade"
      timeout={300}
      >
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/produto/:key" element={<ProductPage />} />
      <Route path="/parceiro/:partnerId/:subpageId" element={<PartnerPage />} />
    </Routes>
  </CSSTransition>
  </TransitionGroup>

);

export default Router;
