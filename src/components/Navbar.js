import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/">Collection</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/">About Us</Link>
        </ul>
      </nav>
    </div>
  );
};
