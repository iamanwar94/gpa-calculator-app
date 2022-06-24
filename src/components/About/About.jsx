import React from "react";
import "./About.css";
import aboutgirl from "./aboutgirl.png";
import effiko from "./effiko.png";
import logo from "./logo.png";

const About = () => {
  return (
    <div className="about_wrapper">
      <div className="about_header_wrapper">
        <div
          className="about_header container"
          style={{
            backgroundImage: `url('${aboutgirl}')`,
          }}
        >
          <div className="about_header_content">
            <img src={effiko} alt="effiko" />
            <h1>EFFIKO</h1>
            <h1>WEBSITE</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              aenean lacus nunc, orci vestibulum. Duis.
            </p>
          </div>
        </div>
      </div>
      <div className="about_content_wrapper">
        <div className="about_content about_content_container container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="about_content_heading_para">
            <h1>ABOUT US</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque cum in sit hac blandit tempus augue malesuada dictum.
              Dolor egestas scelerisque enim tempus mattis. In nulla mauris
              tincidunt interdum. Nascetur tincidunt facilisi maecenas eget
              velit in duis. Neque auctor in sagittis sed.
            </p>
          </div>
        </div>
      </div>
      <div className="about_footer_wrapper">
        <div className="about_footer container">
          <div className="about_footer_content">
            <h1>
              <i className="fa-solid fa-circle small"></i>About us
            </h1>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="about_footer_content">
            <h1>
              <i className="fa-solid fa-circle small"></i>About us
            </h1>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="about_footer_content last">
            <h1>
              <i className="fa-solid fa-circle small"></i>About us
            </h1>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
