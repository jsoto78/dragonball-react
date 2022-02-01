import React from "react";
import ManScreen from "../pages/ManScreen";
import WomanScreen from "../pages/WamanScreen";
import SearchScreen from "../pages/SearchScreen";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import CharterScreen from "../pages/CharterScreen";
const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/mans" component={ManScreen} />
        <Route exact path="/womans" component={WomanScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Route exact path="/caracter/:id" component={CharterScreen} />
        {/* <Redirect to="/mans" /> */}
      </Switch>
    </>
  );
};

export default AppRouter;
