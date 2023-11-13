import React from 'react';
import CustomButton from '../../components/CustomButton';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

const Cart = ({ cart }) => {
  const { userName, id } = cart;

  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/cart-page/${id}`);
    window.location.reload();
  };

  return (
    <div className="cart-container">
      <div className="cart-container__name">
        <h3>{userName}'s cart</h3>
      </div>
      <div className="cart-container__button">
        <CustomButton
          type="primary"
          name="Send a Gift"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Cart;
