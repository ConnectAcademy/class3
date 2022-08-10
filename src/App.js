import React, { useState, useContext } from "react";

import { AuthContext } from "./store/AuthContext";
import Header from "./components/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <Header />
      {user && <Profile />}
      {!user && <Login />}
    </>
  );
};

export default App;
