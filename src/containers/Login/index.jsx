import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../../api/login';
import CustomButton from '../../components/CustomButton';
import Input from '../../components/Input';
import { getUsers } from '../../api/user';

import './styles.scss';

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const onChangeUserName = (event) => {
    const { value } = event.target;
    setUserName(value);
  };

  const onChangePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const navigate = useNavigate();
  const onClick = async () => {
    try {
      await login(userName, password);
      localStorage.setItem('userData', userName);
      const allUsers = await getUsers();
      const myUser = allUsers.data.find(
        (item) => item.username === userName,
      );
      localStorage.setItem('userId', myUser.id);
      navigate('/');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        {error && (
          <h2>Incorrect username or password. Please try again</h2>
        )}
        <div>
          <Input
            id="1"
            onChange={onChangeUserName}
            placeholder="Enter your username"
            type="text"
            value={userName}
          />
        </div>
        <div>
          <Input
            id="2"
            onChange={onChangePassword}
            placeholder="Enter your password"
            type="password"
            value={password}
          />
        </div>
        <div className="login-container__button">
          <CustomButton
            type="primary"
            name="Login"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
