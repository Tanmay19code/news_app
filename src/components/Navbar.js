import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ darkMode, toggleMode }) => {
  const location = useLocation();
  // console.log(darkMode);
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? `navbar-dark bg-dark` : `navbar-light bg-light`
        } fixed-top`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My News App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/business" ? "active" : ""
                  }`}
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/entertainment" ? "active" : ""
                  }`}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/general" ? "active" : ""
                  }`}
                  to="/general"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/health" ? "active" : ""
                  }`}
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/science" ? "active" : ""
                  }`}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/sports" ? "active" : ""
                  }`}
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/technology" ? "active" : ""
                  }`}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                darkMode ? "light" : "dark"
              }`}
            >
              <input
                className="form-check-input"
                onClick={toggleMode}
                checked={darkMode}
                onChange={(e) => {
                  console.log(e.target.checked);
                }}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
