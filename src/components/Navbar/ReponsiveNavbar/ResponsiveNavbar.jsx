import React from "react";
import "./ResponsiveNavbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const ResponsiveNavbar = () => {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">
          <Link className="text-decoration-none text-dark" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div class="nav-links">
        <p>
          <Link className="text-dark" to="/">
            Home
          </Link>
        </p>
        <p>
          <Link className="text-dark" to="/">
            Courses
          </Link>
        </p>
        <p>
          <Link className="text-dark" to="/">
            Scholarship
          </Link>
        </p>
        <p>
          <Link className="text-dark" to="/">
            Interviews
          </Link>
        </p>
        <p>
          <Link className="text-dark" to="/">
            Linkedin Optimization
          </Link>
        </p>
        <p>
          <Link className="text-dark" to="/">
            Blog
          </Link>
        </p>
        <div className="navbar_button">
        <a href="tel:">
          <button className="btn">
            <i className="fa-solid fa-phone"></i>Schedule a call
          </button>
        </a>
      </div>
      </div>
     
    </div>
  );
};

export default ResponsiveNavbar;
