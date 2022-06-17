import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser, logout } from "../redux/actions/authActions.js";
import store from "../redux/store";

import darkBookmarkImg from "../images/dark-bookmark.svg";
import lightBookmarkImg from "../images/light-bookmark.svg";

const Navbar = ({
  darkMode,
  toggleMode,
  isAuthenticated,
  setGlobalEffectVar,
  globalEffectVar,
}) => {
  const location = useLocation();
  // console.log(darkMode);
  const history = useHistory();

  let state,
    userName = "";

  const [loading, setLoading] = useState(false);

  const [effectVar, setEffectVar] = useState(false);

  const dispatch = useDispatch(null);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    // dispatch(setLoadingTrue());
    setEffectVar(false);
    setGlobalEffectVar(false);
    dispatch(loadUser())
      .then((result) => {
        state = JSON.parse(localStorage.getItem("state"));
        // setUser(state.auth.userDetail);
        setUser(store.getState().auth.userDetail);
        // dispatch(setLoadingFalse());
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [store.getState().auth.auth?.authtoken, effectVar, globalEffectVar]);
  console.log("USER=>", user);
  userName = user?.name;

  const logoutBtn = () => {
    // useEffect(() => {
    setLoading(true);
    history.push("/");
    document.location.reload();
    history.push("/");
    dispatch(logout())
      .then((result) => {
        console.log("Logout Success");
        setUser(null);
        userName = "";
        setEffectVar(true);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
    setLoading(false);
  };

  return (
    <div>
      {isAuthenticated ? (
        <nav
          className={`navbar navbar-expand-lg ${
            darkMode ? `navbar-dark bg-dark` : `navbar-light bg-light`
          } fixed-top`}
        >
          <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/">
              My News App
            </Link> */}
            <Link
              to="/"
              className="navbar-brand dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* Tanmay Mutalik */}
              {userName}
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li onClick={logoutBtn}>
                <a className="dropdown-item">Logout</a>
              </li>
            </ul>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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

              <Link to="/bookmarks">
                <img
                  className="nav-img"
                  src={darkMode ? lightBookmarkImg : darkBookmarkImg}
                  alt=""
                />
              </Link>

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
      ) : (
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
              <Link
                    className={`nav-link nav-img text-${
                      darkMode ? "light" : "dark"
                    } ${
                      location.pathname === "/login" ? "active" : ""
                    }`}
                    to="/login"
                  >
                    Login
                  </Link>
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
      )}
    </div>
  );
};

export default Navbar;
