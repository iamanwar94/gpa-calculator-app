import React from "react";
import "./CoursesHome.css";
import Ad from "../Ad/Ads";
import laptop from "./images/laptop.png";
import { Link } from "react-router-dom";

const CoursesHome = () => {
  return (
    <div className="courses_home_wrapper">
      <div className="courses_home_heading_para_wrapper">
        <h1>Courses</h1>
        <p>
          We have curated courses taught by the best prep companies for
          international exams - GRE, GMAT, SAT, ACT, etc. Also gain digital
          skills like Blogging, Data Entry, and much more.
        </p>
      </div>
      <div className="courses_home_card_wrapper">
        <div className="courses_home_card_item">
          <h3>Course Name</h3>
          <img src={laptop} alt="laptop" />
        </div>
        <div className="courses_home_card_item">
          <h3>Course Name</h3>
          <img src={laptop} alt="laptop" />
        </div>
        <div className="courses_home_card_item">
          <h3>Course Name</h3>
          <img src={laptop} alt="laptop" />
        </div>
      </div>
      <div className="view_more">
        <h3>
          <Link to="/courses" className="text-decoration-none">
            View More<i className="fa-solid fa-arrow-right"></i>
          </Link>
        </h3>
      </div>
      <div className="courses_home_ad_wrapper">
        <Ad />
      </div>
    </div>
  );
};

export default CoursesHome;
