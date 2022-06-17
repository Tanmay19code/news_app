import React, { useState } from "react";
// import "../styles/task.css";
import "../styles/authentication.css";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../redux/actions/authActions.js";
import store from "../redux/store";

import Loader from "../components/Spinner";

const LoginPage = ({ setGlobalEffectVar }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch(null);
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(formData.email, formData.password))
      .then(() => {
        // setGlobalEffectVar(true);
        history.push("/");
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {loading && <Loader />}
      <div className="pageContainer">
        <div className="container loginContainer">
          <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
              <div className="col-lg-12 login-title">LOGIN</div>

              <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                  <form>
                    <div className="form-group">
                      <label className="form-control-label">EMAIL</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">PASSWORD</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    <div className="loginButtonHolder">
                      <div className="loginButton" onClick={onSubmit}>
                        LOGIN
                      </div>
                    </div>
                    <div className="newUserTextHolder">
                      <Link to="/register">New here? Register.</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
