import React from "react";
import "./Calc.css";

const Calc = () => {
  return (
    <div className="calc px-2 py-2">
      <div className="calc-heading d-flex justify-content-between">
        <p className=" calc-heading-1 text-center text-white border-bottom border-white w-50 cursor-pointer">
          GPA Calculator
        </p>
        <p className=" calc-heading-2 text-center text-white border-bottom border-white w-50 cursor-pointer">
          GPA Predictor
        </p>
      </div>
      <p>
        Our GPA Predictor tells you the minimum GPA you need to achieve a target
        CGPA based on your current CGPA
      </p>
      <input
        type="text"
        placeholder="Current GPA"
        name=""
        id=""
        className="w-100 my-2"
      />
      <input
        type="text"
        placeholder="Target GPA"
        name=""
        id=""
        className="w-100 my-2"
      />
      <input
        type="text"
        placeholder="Total Credit Hours so far"
        name=""
        id=""
        className="w-100 my-2"
      />
      <input
        type="text"
        placeholder="Remaining Credit Hours"
        name=""
        id=""
        className="w-100 my-2"
      />
      <div className="btn-div d-flex justify-content-around">
        <button className="btn btn-danger text-white w-50 mx-2 text-center">
          Calculate
        </button>
        <button className="btn btn-danger text-white w-50 mx-2 text-center">
          Clear
        </button>
      </div>
      <p>Unleash the power of the Effiko GPA Manager</p>
      <button className="btn btn-danger text-white">
        Download the Effiko App
      </button>
    </div>
  );
};

export default Calc;
