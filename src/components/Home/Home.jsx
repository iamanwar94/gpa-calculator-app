import React from "react";
import Navbar from "../Navbar";
import Calc from "./Calc";

const Home = () => {
  return (
    <div className="home h-100 w-100">
      <Navbar />
      <div className="calc-wrapper d-flex justify-content-around align-items-center">
        <div className="calc-text-wrapper">
          <div className="calc-text mx-2 my-2">
            <h1 className="calc-heading">MOVE YOUR CAREER FORWARD</h1>
            <p className="calc-para">GPA Management. Career Advisory.</p>
          </div>
          <div className="btn-div d-flex justify-content-between">
            <button className="btn btn-danger w-50 mx-2">Play Store</button>
            <button className="btn btn-dark w-50 mx-2">App Store</button>
          </div>
          <div className="calc-ad-wrapper h-50">
            <p className="ad-para">Sponsored</p>
            <div className="calc-ad text-white px-2">Ads.</div>
          </div>
        </div>
        <div className="calc-form-wrapper w-25 h-75">
          <Calc/>
        </div>
      </div>
    </div>
  );
};

export default Home;
