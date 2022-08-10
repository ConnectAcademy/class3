import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { AuthContext } from "./store/AuthContext";
import Header from "./components/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Users from "./components/Users";

const App = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path=":userId" element={<Users />} />
      </Routes>
    </>
  );
};

export default App;
