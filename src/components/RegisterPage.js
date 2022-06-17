import React, { useState } from "react";
// import "../styles/task.css";
import "../styles/authentication.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/authActions.js";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch(null);
  const history = useHistory();

  const onChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(register(formData)).then(() => {
      history.push("/");
      // setTimeout(() => {
      //   window.location.reload(false);
      // }, 3);
    });
  };


  return (
    <div className="pageContainer">
      <div className="container loginContainer">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-title">REGISTER</div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form>
                  <div className="form-group">
                    <label className="form-control-label">NAME</label>
                    <input
                      type="text"
                      className="form-control nameRegisterForm"
                      name="name"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
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
                  <div className="form-group">
                    <label className="form-control-label">
                      CONFIRM PASSWORD
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div className="loginButtonHolder">
                    <div className="loginButton" onClick={(e)=>onSubmit(e)}>REGISTER</div>
                  </div>
                  <div className="newUserTextHolder">
                    <Link to="/">Already registered? Login.</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;