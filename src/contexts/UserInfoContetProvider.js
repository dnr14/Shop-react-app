
import { createContext, useContext, useState } from 'react';

export const UserInfoContext = createContext(null);

export const useUserInfoContext = () => {
  return useContext(UserInfoContext);
}


// 다크 모드를 적요하기위해 생성했지만 안한다면 없애도 된다.
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