import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Produto from '../pages/product/Product';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="produto" element={<Produto/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
