import React from "react";
import './Career.css'

const CareerAdvisorItems = ({ title, image, id }) => {
  return (
    <div className="advisors_card" key={id}>
      <div className="advisors_card_image_wrapper">
        <img
          src={
            image
              ? image
              : "http://t0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL"
          }
          alt={title}
        />
      </div>
      <div className="advisors_card_content_wrapper">
        <h5>{title}</h5>
        <p>
          {title} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Euismod.
        </p>
        <div className="card_btn">
          <button className="">Schedule a Call</button>
          <button className="linked">Linked In</button>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvisorItems;
