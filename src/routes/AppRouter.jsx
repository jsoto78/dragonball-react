import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

const ManScreen = lazy(() => import("../pages/ManScreen"));
const WomanScreen = lazy(() => import("../pages/WamanScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));
const CharterScreen = lazy(() => import("../pages/CharterScreen"));
const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <Switch>
        <Route exact path="/mans" component={ManScreen} />
        <Route exact path="/womans" component={WomanScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Route exact path="/caracter/:id" component={CharterScreen} />
        <Redirect to="/mans" />
      </Switch>
    </Suspense>
  );
};

export default AppRouter;
