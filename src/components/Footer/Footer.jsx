import React from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "./images/background.png";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const aboutClick = () => {
    navigate("/about");
  };
  const termsClickHandler = () => {
    navigate("/terms");
  };
  return (
    <footer
      className="text-center text-lg-start bg-light text-white"
      style={{ backgroundImage: `url('${background}')` }}
    >
      <section className="">
        <div className="container text-center text-md-start">
          <div className="row">
            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-5 mt-5">
              <h6 className="text-uppercase fw-bold mb-5">Company</h6>
              <p>
                <Link to="/" className="text-reset">
                  Home
                </Link>
              </p>
              <p onClick={aboutClick}>
                <Link to="/about" className="text-reset">
                  About Us
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Contact
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Privacy Policy
                </Link>
              </p>
              <p onClick={termsClickHandler}>
                <Link to="/terms" className="text-reset">
                  Terms and Conditions
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Sitemap XML
                </Link>
              </p>
              <p>
                <Link to="/blog" className="text-reset">
                  Efficko Blogs
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-5 mt-5">
              <h6 className="text-uppercase fw-bold mb-5">Services</h6>
              <p>
                <Link to="/" className="text-reset">
                  Linkedin Optimization
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  SOP Request
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Career Advisory
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-5 mt-5">
              <h6 className="text-uppercase fw-bold mb-5">Resources</h6>
              <p>
                <Link to="/" className="text-reset">
                  Interviews
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Courses
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  GPA Calculator
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Prep Books
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Scholarships
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Blog
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  Download Efficko App
                </Link>
              </p>
            </div>
          </div>
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-top">
            <div className="me-5 d-none d-lg-block">
              <span>All Rights Reserved Spreadit Limited 2022</span>
            </div>

            <div>
              <Link to="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="" className="me-4 text-reset">
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
