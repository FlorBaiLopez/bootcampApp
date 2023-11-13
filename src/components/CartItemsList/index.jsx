import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem';
import productType from '../../data/productType';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';

import './styles.scss';

const CartList = ({ products }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };

  return (
    <div className="cart-list">
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <div className="cart-list__button">
        <CustomButton
          type="primary"
          name="Buy Cart"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

CartList.propTypes = {
  products: PropTypes.arrayOf(productType).isRequired,
};

export default CartList;
