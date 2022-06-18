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
        <div className="home_header_wrapper">
          <HomeText />
          <Calc />
        </div>
      </div>
      <CareerHome />
      <CoursesHome />
      <InterviewHome />
      <BlogHome />
    </div>
  );
};

export default Home;
