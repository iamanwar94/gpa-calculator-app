import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <Link className="text-decoration-none text-dark" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      {/* navbar logo ends  */}
      <div className="navbar_items">
        <p>
          <Link className="text-decoration-none text-dark" to="/">
            Home
          </Link>
        </p>
        <p>
          <Link className="text-decoration-none text-dark" to="/courses">
            Courses
          </Link>
        </p>
        <p>
          <Link className="text-decoration-none text-dark" to="/scholarship">
            Scholarship
          </Link>
        </p>
        <p>
          <Link className="text-decoration-none text-dark" to="/interviews">
            Interviews
          </Link>
        </p>
        <p>
          <Link className="text-decoration-none text-dark" to="/linkedinoptimization">
            Linkedin Optimization
          </Link>
        </p>
        <p>
          <Link className="text-decoration-none text-dark" to="/blog">
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
      {/* navbar items ends  */}
    </div>
  );
};

export default Navbar;
