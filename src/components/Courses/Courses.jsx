import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Courses.css";
import ellipse from "./images/Ellipse.png";
import lap from "./images/lap.png";
import CourseItems from "./CourseItems";
import Ad from "../Ad/Ads";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseURL = "https://effiko-api.herokuapp.com";
  const image = "/uploads/";

  const Card = () => {
    return (
      <div className="courses_card_items_wrapper">
        {loading ? (
          <h1 className="loader text-center">Loading...</h1>
        ) : (
          courses
            .slice(0, 4)
            .map((course) => (
              <CourseItems
                key={course._id}
                title={course.title.slice(0, 18)}
                image={baseURL + image + course.image}
              />
            ))
        )}
      </div>
    );
  };
  const Card2 = () => {
    return (
      <div className="courses_card_items_wrapper">
        {loading ? (
          <h1 className="loader text-center">Loading...</h1>
        ) : (
          courses
            .slice(4)
            .map((course) => (
              <CourseItems
                key={course._id}
                title={course.title.slice(0, 18)}
                image={baseURL + image + course.image}
              />
            ))
        )}
      </div>
    );
  };

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

  return (
    <div className="courses_wrapper">
      <div
        className="courses_header_wrapper"
        style={{
          backgroundImage: `url('${ellipse}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="courses_heading_para_wrapper">
          <h3 className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing
          </h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            exercitationem ullam ex cum quisquam. Saepe eaque eveniet amet,
            facilis cupiditate at nostrum quam alias delectus totam qui.
          </p>
          <button className="">Enroll</button>
        </div>
        <div className="courses_header_image_wrapper">
          <div className="courses_header_img">
            <img src={lap} alt="lap" />
          </div>
        </div>
      </div>
      <div className="courses_card_wrapper container">
        <div className="courses_card_heading_wrapper">
          <h1 className="">Courses</h1>
        </div>
        <div className="card_components_wrapper">
          <Card />
          <Ad />
          <Card2 />
        </div>
      </div>
    </div>
  );
};

export default Courses;
