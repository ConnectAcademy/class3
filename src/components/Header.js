import React, { useContext } from "react";

import { AuthContext } from "../store/AuthContext";

const Header = () => {
  const { user, handleLogin } = useContext(AuthContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <h3>Hi</h3>
      <input placeholder="Search here" />
      {user && <h3>Hello {user}</h3>}
      <button onClick={() => handleLogin(null)}>
        Sign {user ? "Out" : "In"}
      </button>
    </div>
  );
};

export default Header;
