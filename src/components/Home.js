import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {users?.map((user) => (
        <Link to={user.id.toString()}>{user.email}</Link>
      ))}
    </div>
  );
};

export default Home;
