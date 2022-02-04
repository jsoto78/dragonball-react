import React, { useEffect, useReducer } from "react";
import LoginRouter from "./routes/LoginRouter";
import "./App.css";
import { AuthContext } from "./contexts/AuthContext";
import { AuthReducer } from "./reducers/AuthReducer";

function App() {
  const init = () => {
    return JSON.parse(localStorage.getItem("auth")) || { log: false };
  };
  const [log, dispatch] = useReducer(AuthReducer, {}, init);
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(log));
  }, [log]);

  return (
    <AuthContext.Provider
      value={{
        log,
        dispatch,
      }}
    >
      <LoginRouter />
    </AuthContext.Provider>
  );
}

export default App;
