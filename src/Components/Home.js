import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Welcome to Home Page</h1>
      <Link to="/register">Register</Link> <br />
      <Link to="/login">Login</Link> <br />
      <Link to="/user/todos">User Dash</Link> <br />
      <Link to="/admin">Admin</Link> <br />
    </>
  );
}
