import React from 'react';
import notFound404 from '../../Assets/notFound404.jpg';

import './styles.scss';

const ErrorPage = () => (
  <div className="error-page">
    <img
      className="error-page__image"
      src={notFound404}
      alt="Not Found"
    />
  </div>
);

export default ErrorPage;
