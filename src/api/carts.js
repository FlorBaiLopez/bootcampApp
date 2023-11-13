import axiosInstance from './config';

const getAllCarts = () => axiosInstance.get('/carts');

const getCartById = (id) => axiosInstance.get(`/carts/user/${id}`);

export { getAllCarts, getCartById };
