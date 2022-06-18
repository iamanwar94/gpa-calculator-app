import React, { useState } from "react";
import "./Calc.css";
import CalcForm from "./CalcForm/CalcForm";
import Form from '../Form/Form'

const Calc = () => {
  const [gpaClicked, setGpaClicked] = useState(true);
  const [predictorClicked, setPredictorClicked] = useState(false);
  const gpaClickHandler = () => {
    !gpaClicked && setGpaClicked(true);
    gpaClicked && setPredictorClicked(false);
  };
 
  const predictorClickHandler = () => {
    !predictorClicked && setPredictorClicked(true);
    predictorClicked && setPredictorClicked(false);
  };

  return (
    <div className="gpa_predictor_wrapper">
      <div className="gpa_predictor_heading_wrapper">
        <div className="heading_text heading_border">
          <h1 onClick={gpaClickHandler}>Gpa Calculator</h1>
        </div>
        <div className="heading_text">
          <h1 onClick={predictorClickHandler}>Gpa Predictor</h1>
        </div>
        {/* headings ends  */}
      </div>
      {/* heading wrapper ends  */}
      <div className="gpa_predictor_heading_para_wrapper">
        <div className="gpa_para">
          <p>
            Our GPA predictor tells you the minimum GPA you need to achieve a
            target CGPA based on your current CGPA.
          </p>
        </div>
      </div>
      {/* headings and paras ends here  */}
      {predictorClicked?<CalcForm />:gpaClicked?<Form/>:""}
      {/* form ends here  */}
      <div className="gpa_bottom_para">
        <p>Unleash the full power of the Effiko GPA Manager. </p>
      </div>
      {/* bottom para ends here  */}
      <div className="bottom_btn">
        <button className="btn">Download the Effiko app</button>
      </div>
      {/* bottom button ends here  */}
    </div>
  );
};

export default Calc;
