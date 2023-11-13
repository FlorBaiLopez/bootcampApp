import React from 'react';
import { Link } from 'react-router-dom';
import productType from '../../data/productType';

import './styles.scss';

const Product = ({ product }) => {
  const { id, price, title, image } = product;

  return (
    <div>
      <Link className="product" to={`/product-page/${id}`}>
        <img src={image} alt={title} />
        <h3 className="product__title">{title}</h3>
        <p className="product__price">${price}</p>
      </Link>
    </div>
  );
};

Product.propTypes = {
  product: productType.isRequired,
};

export default Product;
