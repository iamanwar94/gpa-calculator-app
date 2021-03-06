import React from "react";
import "./Career.css";

const CareerAdvisorItems = ({ title, image, id, phone, linked }) => {
  return (
    <div className="advisors_card" key={id}>
      <div className="advisors_card_image_wrapper">
        <img src={image} alt={title} />
      </div>
      <div className="advisors_card_content_wrapper">
        <h5>{title}</h5>
        <p>{title}</p>
        <div className="card_btn">
          <button className="call">
            <a href={phone}>Schedule a Call</a>
          </button>
          <button className="linked">
            <a href={linked}>Linked In</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvisorItems;
