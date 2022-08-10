import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const handleLogin = (arg) => {
    setUser(arg);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        handleLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
