import React from "react";
import logo from "../../assets/images/Logo.svg";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import useAuth from "../../custom-hooks/useAuth";
const Navbar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // *show toast
        if (currentUser) {
          toast.success("Succesfully Logged Out", {
            position: toast.POSITION.TOP_CENTER,
          });

          navigate("/")
        }
      })
      .catch((error) => {
        // *show toast
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <ul role="list">
          <li>
            <Link to="/order">Order</Link>
          </li>
          <li>
            <Link to="/order-review">Order Review</Link>
          </li>
          <li>
            <Link to="/inventory">Manage Inventory</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <button className="logout-btn" onClick={handleLogOut}>
              LogOut
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
