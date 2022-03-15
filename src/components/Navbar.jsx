import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { authTypes } from "../types/authTypes";

const Navbar = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: authTypes.logout });
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-warning">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          DragonBall App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/mans">
                Mans
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/womans">
                Womans
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                Search
              </NavLink>
            </li>
          </ul>
          <div className="d-flex ">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
