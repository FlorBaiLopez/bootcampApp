import axiosInstance from './config';

const login = (userName, password) =>
  axiosInstance.post('/auth/login', {
    password,
    username: userName,
  });

export { login };
