import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import PublicRoutee from "./PublicRoutee";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import AppRouter from "./AppRouter";

const LoginRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutee>
              <Login />
            </PublicRoutee>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRouter>
              <AppRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </Router>
  );
};

export default LoginRouter;
