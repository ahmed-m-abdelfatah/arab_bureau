import { createContext, useContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [token, setToken] = useState(undefined);
  const [adminData, setAdminData] = useState({
    name: '',
    userName: '',
  });

  const exposed = {
    token,
    setToken,
    adminData,
    setAdminData,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useAuth = () => useContext(Context);

export default Provider;
