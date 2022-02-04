import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { authTypes } from "../types/authTypes";
const Login = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    dispatch({ type: authTypes.login });
    history.push("/mans");
  };
  return (
    <div className="container mt-5 text-center pt-4">
      <img
        src="/assets/animate.gif"
        loading="lazy"
        className="mb-5 pt-5"
        alt="login"
      />
      <br />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
