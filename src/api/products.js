import axiosInstance from './config';

const getProducts = () => axiosInstance.get('/products');

const getSingleProduct = (id) => axiosInstance.get(`/products/${id}`);

const getCategories = () => axiosInstance.get('/products/categories');

const getProductsByCategory = (value) =>
  axiosInstance.get(`/products/category/${value}`);

export {
  getProducts,
  getSingleProduct,
  getCategories,
  getProductsByCategory,
};
