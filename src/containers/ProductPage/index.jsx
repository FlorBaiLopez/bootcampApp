import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSingleProduct } from '../../api/products';

import './styles.scss';

const Product = () => {
  const { id } = useParams();

  const [productToDisplay, setproductToDisplay] = useState();
  const [error, setError] = useState(false);

  const retrieveProduct = async () => {
    try {
      const product = await getSingleProduct(id);
      setproductToDisplay(product.data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    retrieveProduct();
  }, [id]);

  if (error) {
    return (
      <div className="product-page--error">
        <h1>Product not found</h1>
      </div>
    );
  }

  const { title, description, price, image } = productToDisplay || {};

  return (
    <div className="product-view">
      <div className="product-view__title">
        <h1>{title}</h1>
      </div>
      <div className="product-view__container">
        <img src={image} alt={title} />
        <div className="product-view__details">
          <div className="product-view__description">
            <p>{description}</p>
          </div>
          <div className="product-view__price">
            <p>${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default Product;
