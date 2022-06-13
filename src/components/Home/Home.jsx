import React, { useState } from "react";
import "./Home.css";
import Form from "./Form/Form";
import dots from "./images/dots.png";
import Calc from "./Form/Calc";
import CareerHome from "../CareerAdvisor/CareerHome";
const Home = () => {
  const [calcClicked, setCalcClicked] = useState(true);
  const [predictClicked, setPredictClicked] = useState(false);
  const calcClickHandler = () => {
    if (!calcClicked) {
      setCalcClicked(true);
      setPredictClicked(false);
    }
  };
  const predictClickHandler = () => {
    if (!predictClicked) {
      setPredictClicked(true);
      setCalcClicked(false);
    }
  };
  return (
    <div className="home">
      <img src={dots} alt="Dots" className="dots" />
      <div className="calc-wrapper">
        <div className="calc-text-wrapper">
          <div className="calc-text">
            <h1 className="calc-heading">MOVE YOUR CAREER FORWARD</h1>
            <p className="calc-para">GPA Management. Career Advisory.</p>
          </div>
          <div className="btn-div">
            <button className="btn btn-red">
              <i className="fa-brands fa-google-play"></i>
              Play Store
            </button>
            <button className="btn btn-black">
              <i className="fa-brands fa-apple"></i>
              App Store
            </button>
          </div>
          <div className="calc-ad-wrapper">
            <p className="ad-para">Sponsored</p>
            <div className="calc-ad text-white">Ads.</div>
          </div>
        </div>
        <div className="calc-form-wrapper">
          <div className="calc-form">
            <div className="calc-form-heading">
              <h5
                onClick={calcClickHandler}
                className=" calc-form-heading-1 text-center text-white w-50 cursor-pointer"
              >
                GPA Calculator
              </h5>
              <h5
                onClick={predictClickHandler}
                className=" calc-form-heading-2 text-center text-white w-50 cursor-pointer"
              >
                GPA Predictor
              </h5>
            </div>
            {calcClicked ? <Form /> : <Calc />}
          </div>
        </div>
      </div>
      <CareerHome />
    </div>
  );
};

export default Home;
