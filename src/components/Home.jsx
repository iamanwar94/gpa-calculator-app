import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home h-100 w-100">
      <Navbar />
      <div className="calc-wrap d-flex justify-content-around align-items-center">
        <div className="calc-text w-50">
          <h1>MOVE YOUR CAREER FORWARD</h1>
          <p>GPA Management, Career Advisory</p>
          <button className="btn btn-danger ">Play Store</button>
          <button className="btn btn-dark">App Store</button>
        </div>
        <div className="calc w-50">
          <div className="calc-dummy">Hello</div>

        </div>
      </div>
    </div>
  );
};

export default Home;
