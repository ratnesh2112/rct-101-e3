import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuth ,setIsAuth] = useState(false);

  const updateAuth =() =>{

    setIsAuth(!isAuth)
  }
  return <AuthContext.Provider value={{isAuth , updateAuth}}>{children}</AuthContext.Provider>;
};
