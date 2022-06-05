import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Form from "./Form/Form";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="calc-wrapper">
        <div className="calc-text-wrapper">
          <div className="calc-text">
            <h1 className="calc-heading">MOVE YOUR CAREER FORWARD</h1>
            <p className="calc-para">GPA Management. Career Advisory.</p>
          </div>
          <div className="btn-div">
            <button className="btn btn-danger">Play Store</button>
            <button className="btn btn-dark">App Store</button>
          </div>
          <div className="calc-ad-wrapper">
            <p className="ad-para">Sponsored</p>
            <div className="calc-ad text-white">Ads.</div>
          </div>
        </div>
        <div className="calc-form-wrapper">
          <div className="calc-form">
            <div className="calc-form-heading">
              <h5 className=" calc-form-heading-1 text-center text-white w-50 cursor-pointer">
                GPA Calculator
              </h5>
              <h5 className=" calc-form-heading-2 text-center text-white w-50 cursor-pointer">
                GPA Predictor
              </h5>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
