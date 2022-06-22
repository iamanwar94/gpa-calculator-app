import React, { useState } from "react";
import "./Form.css";
import PredictorForm from "./PredictorForm/PredictorForm";
import GpaForm from "./GpaForm/GpaForm";

const Form = () => {
  const [gpaClicked, setGpaClicked] = useState(true);
  const [predictorClicked, setPredictorClicked] = useState(false);
  const gpaClickHandler = () => {
    !gpaClicked && setGpaClicked(true);
    gpaClicked && setPredictorClicked(false);
  };

  const predictorClickHandler = () => {
    !predictorClicked && setPredictorClicked(true);
    predictorClicked && setGpaClicked(false);
  };

  return (
    <div className="gpa_predictor_wrapper">
      <div className="gpa_predictor_heading_wrapper">
        <div className="heading_text heading_border">
          <h1
            onClick={gpaClickHandler}
            // style={
            //   gpaClicked || !predictorClicked
            //     ? { color: "grey" }
            //     : { color: "white" }
            // }
          >
            Gpa Calculator
          </h1>
        </div>
        <div className="heading_text">
          <h1
            onClick={predictorClickHandler}
            // style={
            //   predictorClicked || !gpaClicked
            //     ? { color: "grey" }
            //     : { color: "white" }
            // }
          >
            Gpa Predictor
          </h1>
        </div>
        {/* headings ends  */}
      </div>
      {/* heading wrapper ends  */}
      <div
        className="gpa_predictor_heading_para_wrapper"
        style={!predictorClicked ? { display: "none" } : { display: "flex" }}
      >
        <div className="gpa_para">
          <p>
            Our GPA predictor tells you the minimum GPA you need to achieve a
            target CGPA based on your current CGPA.
          </p>
        </div>
      </div>
      {/* headings and paras ends here  */}
      {predictorClicked ? <PredictorForm /> : gpaClicked ? <GpaForm /> : ""}
      {/* form ends here  */}
      <div
        className="gpa_bottom_para"
        style={!predictorClicked ? { display: "none" } : { display: "block" }}
      >
        <p>Unleash the full power of the Effiko GPA Manager. </p>
      </div>
      {/* bottom para ends here  */}
      <div
        className="bottom_btn"
        style={!predictorClicked ? { display: "none" } : { display: "flex" }}
      >
        <button className="btn">Download the Effiko app</button>
      </div>
      {/* bottom button ends here  */}
    </div>
  );
};

export default Form;
