import { Email, Lock } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../home/components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./login.scss";
import { useState, useEffect } from "react";
import { loginUser, authRequest } from "../../redux/_actions/Auth/user.Action";
import validate from "./hooks/validate";
import AlertMessage from "../../components/AlertMessage";

const alertStyle = {
  color: "red",
};

const LoginTeacher = () => {
  //router
  const dispatch = useDispatch();
  const history = useHistory();

  const [alert, setAlert] = useState(null);

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const isValidate = validate(email, password);
    if (!isValidate) return;
    const res = await dispatch(loginUser({ email, password }));

    if (res) {
      history.push("/teacher-dashboard");
      return;
    } else {
      setAlert({ type: "danger", message: "Incorrect email or password" });
      setTimeout(() => setAlert(null), 2000);
    }
  };

  return (
    <div className="main-content">
      <Navbar />
      <div className="login">
        <h3 className="login-header">Become a Udemy Instructor!</h3>
        <form className="login-form" onSubmit={login}>
          <AlertMessage info={alert} style={alertStyle} />
          <div className="input-email-container">
            <Email className="icon" />
            <input
              type="email"
              className="input-email"
              placeholder="Email"
              name="email"
              required
            />
          </div>
          <div className="input-password-container">
            <Lock className="icon" />
            <input
              type="password"
              className="input-password"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <div className="submit-row">
            <button className="btn-submit">Log In</button>
            <div className="forgot-password-container">
              <span>or </span>
              <Link to="/forgot-password" className="forgot-password-link">
                Forgot Password
              </Link>
            </div>
          </div>
        </form>
        <div className="login-footer-container">
          Don't have an account?
          <Link to="/register" className="sign-up-link">
            {" "}
            Sign Up
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginTeacher;
