import { Email, Lock, People } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Footer from "../home/components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./signup.scss";
import { registerUser } from "../../redux/_actions/Auth/user.Action";
import { toast } from "react-toastify";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import validator from "validator";
import AlertMessage from "../../components/AlertMessage";
// import validate from "../login/hooks/validate.js";

const SignUp = () => {
  const refStep1 = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [alert, setAlert] = useState(null);

  const submitRegister = async (e) => {
    e.preventDefault();
    const { Email, Password, FullName } = refStep1.current;
    const isEmail = validator.isEmail(Email.value);
    if (!isEmail) {
      setAlert({ type: "danger", message: "Invalid email" });
      setTimeout(() => setAlert(null), 2000);
    }
    const isPassword = validator.isEmpty(Password.value);
    if (!isPassword) {
      setAlert({ type: "danger", message: "Vui long nhap lai mat khau" });
      setTimeout(() => setAlert(null), 2000);
      console.log("pass");
    }
    const obj = {
      Email: Email.value,
      Password: Password.value,
      FullName: FullName.value,
    };

    const res = await dispatch(registerUser(obj));
    if (res === true) {
      history.push("/log-in");
    }
  };

  return (
    <div className="main-content">
      <Navbar />
      <div className="login">
        <h3 className="login-header">Sign Up and Start Learning!</h3>
        <form className="login-form" ref={refStep1}>
          <AlertMessage info={alert} />
          <div className="input-container">
            <People />
            <input
              type="text"
              className="input-content"
              placeholder="Full Name"
              name="FullName"
              required
            />
          </div>
          <div className="input-container">
            <Email />
            <input
              type="email"
              className="input-content"
              placeholder="Email"
              name="Email"
              required
            />
          </div>
          <div className="input-container">
            <Lock />
            <input
              type="password"
              className="input-content"
              placeholder="Password"
              name="Password"
              required
            />
          </div>
          <div className="submit-row">
            <button className="btn-submit" onClick={submitRegister}>
              Sign Up
            </button>
            <div className="term-policy-container">
              By signing up, you agree to our
              <Link to="/" className="link">
                {" "}
                Terms of Use{" "}
              </Link>
              and
              <Link to="/" className="link">
                {" "}
                Privacy Policy
              </Link>
            </div>
          </div>
        </form>
        <div className="login-footer">
          Already have an account?
          <Link to="log-in" className="sign-up-link">
            {" "}
            Log In
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
