import React, { useState } from "react";
import "./News.css";
import axios from "axios";

const News = () => {
  const newsReg = { name: "", email: "" };
  const [news, setNews] = useState(newsReg);

  const baseURL= "https://effiko-api.herokuapp.com"

  const clickHandler = (e) => {
    e.prevent.default();
    axios.post('/user', news)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

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
          <button onClick={clickHandler}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default News;
