import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const params = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      .then((res) => setUser(res.data));
  }, []);
  console.log(params);
  return (
    <div>
      <h3>{user?.name}</h3>
      <h3>{user?.phone}</h3>
      <h3>{user?.username}</h3>
    </div>
  );
};

export default Users;
