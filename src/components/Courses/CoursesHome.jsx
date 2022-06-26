import React, { useState, useEffect } from "react";
import "./CoursesHome.css";
import Ad from "../Ad/Ads";
import laptop from "./images/laptop.png";
import { Link } from "react-router-dom";
import axios from "axios";

const CoursesHome = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseURL = "https://effiko-api.herokuapp.com";
  const image = "/uploads/";

  useEffect(() => {
    async function getCourses() {
      try {
        const response = await axios.get(`${baseURL}/api/courses`);
        setCourses(response.data.courses);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getCourses();
  }, []);

  const Card = () => {
    return courses.slice(0, 3).map((course) => (
      <div className="courses_home_card_item" key={course.id}>
        <h3> {course.title.slice(0, 18)} </h3>
        <img src={baseURL + image + course.image} alt={course.title} />
      </div>
    ));
  };

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
        {loading ? <h1 className="text-center">Loading...</h1> : <Card />}
        <Card />
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
