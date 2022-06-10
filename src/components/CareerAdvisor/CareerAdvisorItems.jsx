import React from "react";

const CareerAdvisorItems = (props) => {
  const { title, image } = props;
  return (
    <div className="card" style={{ width: "100%" }}>
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
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{title}</p>
        <button className="btn btn-white">Enroll</button>
      </div>
    </div>
  );
};

export default CareerAdvisorItems;
