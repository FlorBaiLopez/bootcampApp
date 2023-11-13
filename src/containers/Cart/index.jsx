import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItemsList from '../../components/CartItemsList';
import { getCartById } from '../../api/carts';
import { getSingleProduct } from '../../api/products';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorPage from '../ErrorPage';

import './styles.scss';

const Cart = () => {
  const { id } = useParams();

  let userId;
  if (id) {
    userId = id;
  } else {
    userId = localStorage.getItem('userId');
  }

  const [userCart, setUserCart] = useState();
  const [error, setError] = useState(false);
  const [productsIdAndQuantity, setProductsIdAndQuantity] = useState(
    [],
  );
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const retrieveCart = async () => {
    try {
      setLoading(true);
      const cart = await getCartById(userId);
      setUserCart(cart.data[cart.data.length - 1]);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    retrieveCart();
  }, [userId]);

  const fetchProductsDetails = async () => {
    try {
      setLoading(true);
      const productsDetails = await Promise.all(
        productsIdAndQuantity.map(async ({ productId, quantity }) => {
          const product = await getSingleProduct(productId);
          return {
            ...product.data,
            quantity,
          };
        }),
      );
      setProducts(productsDetails);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    if (userCart && userCart.products) {
      const productsInfo = userCart.products.map((product) => ({
        productId: product.productId,
        quantity: product.quantity,
      }));
      setProductsIdAndQuantity(productsInfo);
    }
  }, [userCart]);

  useEffect(() => {
    if (productsIdAndQuantity.length > 0) {
      fetchProductsDetails();
    }
  }, [productsIdAndQuantity]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!userCart) {
    return (
      <div className="empty">
        <h4>This cart is empty</h4>;
      </div>
    );
  }

  return (
    <div className="cart-view">
      {error && <ErrorPage />}
      <div className="cart-view__title">
        <h3>Cart</h3>
      </div>
      <div className="cart-view__details-container">
        <CartItemsList products={products} />
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.shape({
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default Cart;
