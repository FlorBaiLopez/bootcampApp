import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product';
import productType from '../../data/productType';

import './styles.scss';

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
};

export default ProductList;
