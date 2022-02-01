import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import AppRouter from "./AppRouter";
const LoginRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
      <AppRouter />
    </Router>
  );
};

export default LoginRouter;
