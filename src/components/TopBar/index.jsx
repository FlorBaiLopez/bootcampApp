import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../Assets/logo.jpg';

import './styles.scss';

const TopBar = ({ routes }) => {
  const userData = localStorage.getItem('userData');

  useEffect(() => {}, [userData]);

  let newRoutes = routes;

  if (userData === null) {
    newRoutes = newRoutes.filter(
      (item) =>
        !item.route.includes('gift') &&
        !item.route.includes('profile') &&
        !item.route.includes('cart'),
    );
  } else {
    newRoutes = newRoutes.filter((item) => item.route !== '/login');
  }

  return (
    <header className="top-bar">
      <div className="top-bar__logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="top-bar__nav">
        <ul>
          {newRoutes.map(({ label, route }) => (
            <li key={label}>
              <NavLink
                to={route}
                end
                className={({ isActive }) =>
                  isActive && 'top-bar__active'
                }>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

TopBar.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TopBar;
