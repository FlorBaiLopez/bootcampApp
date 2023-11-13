import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from '../Home';
import ErrorPage from '../ErrorPage';
import Layout from '../../components/Layout';
import Login from '../Login';
import Cart from '../Cart';
import Profile from '../Profile';
import ProductPage from '../ProductPage';
import SendGift from '../SendGift';
import { ROUTES } from '../../data/routes';

import './styles.scss';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.cartPage} element={<Cart />} />
        <Route path={ROUTES.giftPage} element={<SendGift />} />
        <Route path={ROUTES.productPage} element={<ProductPage />} />
        <Route path={ROUTES.profile} element={<Profile />} />

        {/* 404 not found route */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
