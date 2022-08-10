import React, { useContext } from "react";

import { AuthContext } from "../store/AuthContext";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const onHandleLogin = (ev) => {
    ev.preventDefault();
    const { username } = ev.target;
    handleLogin(username.value);
  };
  return (
    <form
      onSubmit={onHandleLogin}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input placeholder="username" name="username" />
      <input placeholder="password" type="password" name="password" />
      <button>Login</button>
    </form>
  );
};

export default Login;
