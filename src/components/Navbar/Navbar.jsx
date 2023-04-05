import React from "react";
import logo from "../../assets/images/Logo.svg";
import "./Navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
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
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
