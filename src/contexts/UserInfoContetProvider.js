
import { createContext, useContext, useState } from 'react';

export const UserInfoContext = createContext(null);

export const useUserInfoContext = () => {
  return useContext(UserInfoContext);
}

const UserInfoContetProvider = ({ children }) => {

  const [onOff, setOnOff] = useState(false);

  const value = {
    onOff,
    setOnOff
  }

  return <UserInfoContext.Provider value={value}>
    {children}
  </UserInfoContext.Provider>
};

export default UserInfoContetProvider;