import React, { createContext, useEffect, useState } from 'react';
import { User } from '../interfaces/user';
import SessionController from '../utils/handlers/SessionController';


interface AuthContextLike {
  userInfo: User | null;
  saveUserDataInStorage: (user: User)  => void;
  handleClearUserInfo: () => void;
}

interface Props {
  children: JSX.Element;
}

const AuthContext = createContext<AuthContextLike>({
  userInfo: null,
  saveUserDataInStorage: (user: User)  => {},
  handleClearUserInfo: ()  => {}
});

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<User | null>(null);
  
  useEffect(() => {
    const userData = SessionController.getUserInfo();
    
    if (userData) setUserInfo(userData)    
  }, [])

  function saveUserDataInStorage(user: User) {
    SessionController.setUserInfo(user!!)
    setUserInfo(user)
  }

  function handleClearUserInfo() {
    SessionController.clearUserInfo()
    setUserInfo(null)
  }

  return (
    <AuthContext.Provider value={{userInfo, saveUserDataInStorage, handleClearUserInfo}}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext };