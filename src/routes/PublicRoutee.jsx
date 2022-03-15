import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const PublicRoutee = ({ children }) => {
  const { log } = useContext(AuthContext);
  return !log.log ? children : <Navigate to="/" />;
};

export default PublicRoutee;
