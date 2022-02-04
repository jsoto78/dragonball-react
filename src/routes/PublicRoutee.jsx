import React from "react";
import { Route, Redirect } from "react-router";

const PublicRoutee = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !auth.log ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRoutee;
