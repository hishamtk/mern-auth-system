import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/auth/authContext";
import AlertContext from "../Context/alert/alertContext";

import Alert from "./Alert";
import Loading from "./Loading";

function Register(props) {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { userRegister, loading, error, clearErrors ,isAuthenticated} = authContext;
  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if(isAuthenticated){
      props.history.push('/user/todos')
    }
    if (error) {
      error.forEach((err) => {
        setAlert(err.msg, "red");
      });
      clearErrors();
    }
  }, [clearErrors, error, setAlert]);

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    userRegister(user);
  };

  return (
    <>
      <h1> Welcome to User Registration Page</h1>
      {loading && <Loading />}
      <form onSubmit={onSubmit}>
        <Alert />
        <label htmlFor="name">Name : </label>
        <br />
        <input
          value={user.name}
          type="text"
          onChange={onChange}
          id="name"
          name="name"
          placeholder="Enter Name"
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={onChange}
          value={user.email}
          placeholder="Enter Email Address"
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={onChange}
          name="password"
          placeholder="Enter Password"
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br /> <br /> <Link to="/login"> Login </Link> <br />
      <Link to="/"> Home Page </Link> <br />
    </>
  );
}

export default Register;
