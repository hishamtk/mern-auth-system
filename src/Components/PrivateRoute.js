import React, { Component, useContext } from "react";

import { Route, Redirect } from "react-router-dom";
import AuthContext from "../Context/auth/authContext";

function PrivateRoute({component:Component,...rest}) {
    const authContext = useContext(AuthContext)
  const {isAuthenticated} = authContext
    return (
      <Route {...rest} render={(props)=>(!isAuthenticated ? <Redirect to="/login" />:<Component {...props} /> )}  />
  )
}

export default PrivateRoute;
