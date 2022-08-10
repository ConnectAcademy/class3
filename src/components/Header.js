import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../store/AuthContext";

const Header = () => {
  const { user, handleLogin } = useContext(AuthContext);
  const nav = useNavigate();

  const handleAuth = () => {
    if (user) {
      handleLogin(null);
    } else {
      nav("/login");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/login">Login</Link>
      <input placeholder="Search here" />
      {user && <h3>Hello {user}</h3>}
      <button onClick={handleAuth}>Sign {user ? "Out" : "In"}</button>
    </div>
  );
};

export default Header;
