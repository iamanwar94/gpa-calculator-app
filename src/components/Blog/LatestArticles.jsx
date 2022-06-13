import React from "react";
import { Link } from "react-router-dom";

const LatestArticles = ({ blog }) => {
  const { title, description, urlToImage } = blog;
  return (
    <div className="card my-5">
      <img src={urlToImage} alt={title} className="card-img-top rounded" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="card_btn btn btn-white mx-auto">Read More</button>
      </div>
      </div>
  );
};

export default LatestArticles;
