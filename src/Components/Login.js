import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../Context/auth/authContext";
import AlertContext from "../Context/alert/alertContext";

import Alert from "./Alert";
import Loading from "./Loading";

function Login(props) {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { userLogin, loading, error, isAuthenticated, clearErrors } =
    authContext;

  const [userData, setUser] = useState({ email: "", password: "" });

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/user/todos");
    }
    if (error) {
      error.forEach((err) => {
        setAlert(err.msg, "red");
      });
      clearErrors();
    }
  }, [clearErrors, error, isAuthenticated, props.history, setAlert]);

  const onChange = (e) => {
    setUser({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefaut();
    userLogin(userData);
  };

  return (
    <>
      <h1>Welcome To Login Page</h1>
      {loading && <Loading />}
      <form onSubmit={onSubmit}>
        {/* <form action="http://localhost:3000/login"> */}
        <Alert />
        <label for="htmlFor">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          value={userData.email}
          onChange={onChange}
          name="email"
          placeholder="Enter Email Address"
        />
        <br />
        <label for="htmlFor">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          onChange={onChange}
          value={userData.password}
          name="password"
          placeholder="Enter Password"
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br /> <br /> <Link to="/register"> Register </Link> <br />
      <Link to="/"> Home Page </Link> <br />
    </>
  );
}

export default Login;
