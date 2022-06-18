import React from "react";
import "./News.css";

const News = () => {
  return (
    <div className="News_wrapper">
      <div className="news_heading">
        <h3>Newsletter Sign Up</h3>
      </div>
      <div className="news_inputs_wrapper">
        <div className="news_input">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Full Name" id="name" />
        </div>
        <div className="news_input">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Email" id="email" />
        </div>
        <div className="news_btn">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default News;
