import { useEffect, useRef, useState } from "react";
import "./Login.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import googleLogin from "../../googleLogin/googleLogin";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // *show toast
        toast.success("Succesfully Logged In", {
          position: toast.POSITION.TOP_CENTER,
        });

        // * reset state
        setEmail("");
        setPassword("");

        // *redirect user
        /*
         *Redirect them to the /login page, but save the current
         *location they were trying to go to when they were redirected.
         * this allows use to send them along to that page after they login
         * which is a nicer user experience than dropping them off on the home page
         * https://github.com/mehedihasan2810/react-router/blob/main/examples/auth/src/App.tsx
         */
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
        // *show toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  const handleShowPassword = (e) => {
    setIsShowPassword(e.target.checked);
  };

  return (
    <div className="form-center">
      <div className="form-container">
        <div className="form-bg"></div>
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleLogin}>
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
                type={isShowPassword ? "text" : "password"}
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
              <div className="togglePassword">
                <input
                  onChange={handleShowPassword}
                  type="checkbox"
                  name="togglePassword"
                  id="togglePassword"
                />
                <label
                  className="togglePassword-label"
                  htmlFor="togglePassword"
                >
                  {isShowPassword ? "Hide Password" : "Show Password"}
                </label>
              </div>
            </div>
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="create-new-account">
          <span>New to Ema-john? </span>{" "}
          <Link to="/signup" className="create-new-account-link">
            Create New Account
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

export default Login;
