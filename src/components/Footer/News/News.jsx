import React, { useState } from "react";
import "./News.css";
import axios from "axios";

const News = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const clickHandler = async () => {
    const config = {
      method: "POST",
      url: "https://effiko-api.herokuapp.com/api/subscriptions",
      headers: {
        "content-type": "application/json",
      },
      data: { user_name: name, email: email },
    };
    const response = await axios(config);
    console.log(response);
    setName("");
    setEmail("");
  };

  return (
    <div className="News_wrapper">
      <div className="news_heading">
        <h3>Newsletter Sign Up</h3>
      </div>
      <div className="news_inputs_wrapper">
        <div className="news_input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Full Name"
            id="name"
            value={name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="news_input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
          />
        </div>
        <div className="news_btn">
          <button onClick={clickHandler}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default News;
