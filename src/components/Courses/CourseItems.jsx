import React from "react";
import "./Courses.css";

const CourseItems = (props) => {
  const { title, image } = props;
  return (
    <div className="courses_card">
      <div className="courses_card_image_wrapper">
        <img src={image} alt={title} />
      </div>
      <div className="courses_card_content_wrapper">
        <h5>{title}</h5>
        <p>{title}</p>
        <button>Enroll</button>
      </div>
    </div>
  );
};

export default CourseItems;
