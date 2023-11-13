import React from 'react';
import productType from '../../data/productType';

import './styles.scss';

const CartItem = ({ product }) => {
  const { id, price, title, image, quantity } = product;

  return (
    <div className="cartItem">
      <img src={image} alt={title} />
      <div className="cartItem-text">
        <h3 className="cartItem-text__title">{title}</h3>
        <div className="cartItem-text__details">
          <p className="cartItem-text__details-price">
            Price: ${price}
          </p>
          <div className="cartItem-text__details-quantity">
            <label>Quantity:</label>
            <input type="number" value={quantity} min="1" />
          </div>
          <p className="cartItem-text__details-total">
            Total: {price * quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  product: productType.isRequired,
};

export default CartItem;
