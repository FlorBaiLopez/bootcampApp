import { createContext } from 'react';

const UserContext = createContext({
  setUser: null,
  user: null,
});

export default UserContext;
