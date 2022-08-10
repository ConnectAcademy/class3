import React, { useContext } from "react";

import { AuthContext } from "../store/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return <div>Username: {user}</div>;
};

export default Profile;
