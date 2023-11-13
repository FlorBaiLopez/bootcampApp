import axiosInstance from './config';

const getUsers = () => axiosInstance.get(`/users`);

const getSingleUser = (id) => axiosInstance.get(`/users/${id}`);

export { getUsers, getSingleUser };
