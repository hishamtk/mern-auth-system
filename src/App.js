import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//components import
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import UserDashboard from "./Components/UserDashboard";
import AdminDashboard from "./Components/AdminDashboard";

// Context State Imports
import AlertState from "./Context/alert/alertState";
import AuthState from "./Context/auth/authState";

import PrivateRoute from "./Components/PrivateRoute";

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute
                exact
                path="/user/todos"
                component={UserDashboard}
              />
              <PrivateRoute exact path="/admin" component={AdminDashboard} />
              <Route
                component={() => (
                  <h1>
                    Not Found Go back <Link to="/">Home Page</Link>
                  </h1>
                )}
              />
            </Switch>
          </>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
