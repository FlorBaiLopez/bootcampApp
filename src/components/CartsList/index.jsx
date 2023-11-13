import React from 'react';
import Cart from '../../components/Cart';

import './styles.scss';

const CartsList = ({ carts }) => (
  <div className="cart-list">
    {carts.map((cart) => (
      <div className="cart-list__product">
        <Cart key={cart.id} cart={cart} />
      </div>
    ))}
  </div>
);

export default CartsList;
