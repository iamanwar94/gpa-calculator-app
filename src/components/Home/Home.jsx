import React, { useState } from "react";
import "./Home.css";
// import Form from "./Form/Form";
import dots from "./images/dots.png";
import uper from "./images/uper.png";
import right from "./images/right.png";
import circle from "./images/circle.png";
import s from "./images/s.png";
import Calc from "./Form/Calc";
import CareerHome from "../CareerAdvisor/CareerHome";
import HomeText from "./HomeText/HomeText";
import CoursesHome from "../Courses/CoursesHome";
import InterviewHome from "../Interview/InterviewHome";
import BlogHome from "../Blog/BlogHome/BlogHome";
// import CalcForm from "./Form/CalcForm/CalcForm";
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
    <div>
      <div className="home">
        <div className="dots">
          <img src={dots} alt="dots" />
        </div>
        <div className="s">
          <img src={s} alt="s" />
        </div>
        <div className="right">
          <img src={right} alt="right" />
        </div>
        <div className="uper">
          <img src={uper} alt="uper" />
        </div>
        <div className="circle">
          <img src={circle} alt="circle" />
        </div>
        <HomeText />
        <div className="calc_form_wrapper">
          {/* <CalcForm /> */}
          <Calc />
        </div>
        {/* <img src={dots} alt="Dots" className="dots" /> */}
        {/* <div className="calc-form-wrapper">
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
        </div> */}
      </div>
      <CareerHome />
      <CoursesHome />
      <InterviewHome />
      <BlogHome />
    </div>
  );
};

export default Home;
