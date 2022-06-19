import React from "react";
import "./Courses.css";

const CourseItems = (props) => {
  const { title, image } = props;
  return (
    <div className="courses_card">
      <div className="courses_card_image_wrapper">
        <img
          src={
            image
              ? image
              : "http://t0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL"
          }
          alt={title}
        />
      </div>
      <div className="courses_card_content_wrapper">
        <h5>{title}</h5>
        <p>
          {title} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Euismod.
        </p>
        <button>Enroll</button>
      </div>
    </div>
  );
};

export default CourseItems;
