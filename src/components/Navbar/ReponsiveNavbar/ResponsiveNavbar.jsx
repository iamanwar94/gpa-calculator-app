import React from "react";
import "./ResponsiveNavbar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const ResponsiveNavbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <Link className="text-decoration-none text-dark" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        <p>
          <Link className="text-dark" to="/">
            Home
          </Link>
        </p>
        <p>
          <Link className="text-dark" to="/courses">
            Courses
          </Link>
        </p>
        <p>
          <Link className="text-dark" to="/scholarship">
            Scholarship
          </Link>
        </p>
        <p>
          <Link className="text-dark" to="/interviews">
            Interviews
          </Link>
        </p>
        <p>
          <Link className="text-dark" to="/linkedinoptimization">
            Linkedin Optimization
          </Link>
        </p>
        <p>
          <Link className="text-dark" to="/blog">
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
