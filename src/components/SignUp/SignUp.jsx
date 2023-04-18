import React, { useState } from "react";
import "./SignUp.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { auth } from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import googleLogin from "../../googleLogin/googleLogin";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      // *show toast
      toast.error("Password doesn't match!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const loggedUser = userCredential.user;
        // *show toast
        toast.success("Succesfully signed up", {
          position: toast.POSITION.TOP_CENTER,
        });

        // * reset state
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        // *redirect user
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // *show toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
        });

        // * reset state
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        // *show toast
        toast.success("Succesfully Logged In by Google", {
          position: toast.POSITION.TOP_CENTER,
        });

        // *redirect user
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // *show success toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div className="form-center">
      <div className="form-container">
        <div className="form-bg"></div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="form-body">
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className="form-control">
              <label htmlFor="password">password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </div>
            <div className="form-control">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                value={confirmPassword}
              />
            </div>
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="create-new-account">
          <span>Already have an account? </span>{" "}
          <Link to="/login" className="create-new-account-link">
            Login
          </Link>
        </div>
        <div className="or-container">
          <span className="line"></span>
          <span>or</span>
          <span className="line"></span>
        </div>
        <GoogleButton onClick={handleGoogleLogin} className="google-button" />
      </div>
    </div>
  );
};

export default SignUp;
