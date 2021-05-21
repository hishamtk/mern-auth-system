import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import AuthContext from "../Context/auth/authContext";

const UserDashboard = () => {
  const authContext = useContext(AuthContext);
  const { loadUser, user } = authContext;
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <>
      <h1>Welcome to User Dashboard</h1>
      <Link to="/">Logout</Link>
    </>
  );
};

export default UserDashboard;
