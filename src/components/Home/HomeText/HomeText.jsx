import React from "react";
import "./HomeText.css";

const HomeText = () => {
  return (
    <div className="home_text_wrapper">
      <div className="home_text_heading_para_button">
        <h1>Move Your Career Forward</h1>
        <p>GPA Management. Career Advisory.</p>
        <div className="btn_div">
          <button className="btn_play">
            <i className="fa-brands fa-google-play"></i>
            Play Store
          </button>
          <button className="btn_app">
            <i className="fa-brands fa-apple"></i>
            App Store
          </button>
        </div>
      </div>
      <div className="home_ad">
        <p>Sponsored</p>
        <div className="ad">Ads</div>
      </div>
    </div>
  );
};

export default HomeText;
