import React from 'react';
import { Outlet } from 'react-router-dom';

import TopBar from '../TopBar';

import './styles.scss';

const Layout = () => {
  const id = localStorage.getItem('userId');
  return (
    <div className="layout">
      <TopBar
        routes={[
          { label: 'Home', route: '/' },
          { label: 'Login', route: '/login' },
          { label: 'Profile', route: `/profile/${id}` },
          { label: 'Cart', route: '/cart-page' },
          { label: 'Send Gift', route: '/gift-page' },
        ]}
      />
      <div className="layout__children">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
