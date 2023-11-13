import React, { useEffect, useState } from 'react';
import CartsList from '../../components/CartsList';
import { getAllCarts } from '../../api/carts';
import { getSingleUser } from '../../api/user';
import LoadingSpinner from '../../components/LoadingSpinner';

import './styles.scss';

const SendGift = () => {
  const [carts, setCarts] = useState(null);
  const [error, setError] = useState(false);
  const [cartAndUsers, setCartsAndUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCarts = async () => {
    try {
      setLoading(true);
      const result = await getAllCarts();
      setCarts(result.data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  const fetchCartUsers = async () => {
    try {
      const cartsWithUsers = await Promise.all(
        carts.map(async (cart) => {
          const user = await getSingleUser(cart.userId);
          return {
            ...cart,
            userName:
              user.data.name.firstname +
              ' ' +
              user.data.name.lastname,
          };
        }),
      );
      setCartsAndUsers(cartsWithUsers);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    if (carts) {
      fetchCartUsers();
    }
  }, [carts]);

  if (loading || !carts || !cartAndUsers) {
    return <LoadingSpinner />;
  }

  return (
    <div className="sendGift-view">
      {error && <ErrorPage />}
      <div className="sendGift-view__title">
        <h3>Send a Gift</h3>
      </div>
      <div className="sendGift-view__carts">
        <CartsList carts={cartAndUsers} />
      </div>
    </div>
  );
};

export default SendGift;
