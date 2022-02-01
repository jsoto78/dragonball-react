import React from "react";

const Login = ({ history }) => {
  const handleLogin = () => {
    history.push("/mans");
  };
  return (
    <div className="container mt-5 text-center">
      <img src="/assets/animate.gif" alt="login" />
      <br />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
