import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/" className={"link"}>
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/">Home</Link>
          <Link to="#">Collection</Link>
          <Link to="/about">About Us</Link>
        </ul>
      </nav>
    </div>
  );
};
