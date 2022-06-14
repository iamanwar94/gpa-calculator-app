import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar bg-white">
      <ul className="navbar_ul d-flex justify-content-around w-100 list-unstyled bg-white align-items-center h-100">
        <li>
          <Link to="/" className="text-decoration-none text-dark">
            <img src={logo} alt="logo" width="151px" height="62px" />
          </Link>
        </li>
        <li>
          <Link to="/" className="navbar_link text-decoration-none text-dark">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className=" navbar_link text-decoration-none text-dark"
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            to="/scholarship"
            className=" navbar_link text-decoration-none text-dark"
          >
            Scholarship
          </Link>
        </li>
        <li>
          <Link
            to="/interviews"
            className=" navbar_link text-decoration-none text-dark"
          >
            Interviews
          </Link>
        </li>
        <li>
          <Link
            to="/linkedinoptimization"
            className=" navbar_link text-decoration-none text-dark"
          >
            Linkedin Optimization
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className=" navbar_link text-decoration-none text-dark"
          >
            Blog
          </Link>
        </li>
        <li className="phone">
          <a href="tel:">
            <button className="schedule_call btn btn-outline-dark rounded w-100 fw-bold px-4">
              <i className="fa-solid fa-phone"></i>Schedule a call
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
