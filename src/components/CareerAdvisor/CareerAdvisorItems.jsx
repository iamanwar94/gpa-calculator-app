import React from "react";

const CareerAdvisorItems = ({ title, image, id }) => {
  return (
    <div key={id} className="card" style={{ width: "100%" }}>
      <img
        src={
          image
            ? image
            : "http://t0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL"
        }
        alt={title}
        className="card-img-top rounded"
        style={{ height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">This is Heading</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quasi.
        </p>
        <div className="advisor_btn d-flex justify-content-between">
          <button type="button" class="btn btn-white btn-sm">
            Schedule a Call
          </button>
          <button type="button" class="btn btn-outline-primary btn-sm">
            Linkedin
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvisorItems;
