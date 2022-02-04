import { useContext } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import PrivateRouter from "./PrivateRouter";
import PublicRoutee from "./PublicRoutee";
import Login from "../pages/Login";
import AppRouter from "./AppRouter";

const LoginRouter = () => {
  const { log } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <PublicRoutee component={Login} auth={log} path="/login" />
        <PrivateRouter component={AppRouter} auth={log} path="/" />
      </Switch>
    </Router>
  );
};

export default LoginRouter;
