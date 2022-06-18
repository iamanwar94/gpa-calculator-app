import React, { useState } from "react";

const CalcForm = () => {
  const [current, setCurrent] = useState("");
  const [target, setTarget] = useState("");
  const [totalCcredit, setTotalCcredit] = useState("");
  const [remaingCredit, setRemaingCredit] = useState("");
  const onCurrentChangeHandler = ({ target }) => {
    setCurrent(target.value);
  };
  const onTargetChangeHandler = ({ target }) => {
    setTarget(target.value);
  };
  const onTotalCreditChangeHandler = ({ target }) => {
    setTotalCcredit(target.value);
  };
  const onRemainingCreditChangeHandler = ({ target }) => {
    setRemaingCredit(target.value);
  };
  const submitHandler = () => {
    const totalCreditHours = Number(totalCcredit) + Number(remaingCredit);
    const totalPoints = Number(target) * Number(totalCreditHours);
    const pointsGot = Number(totalCcredit) * Number(current);
    const differnce = totalPoints - pointsGot;
    const result = differnce / Number(remaingCredit);
    const prediction = result.toFixed(1);
    alert(prediction);
    clearValuesHandler();
  };
  const clearValuesHandler = () => {
    setCurrent("");
    setTarget("");
    setTotalCcredit("");
    setRemaingCredit("");
  };
  return (
    <div className="gpa_predictor_form_wrapper">
      <div className="inputs_wrapper">
        <div className="single_input">
          <label htmlFor="current">Current CGPA</label>
          <input
            type="text"
            name="current"
            id="current"
            placeholder="CGPA Here"
            value={current}
            onChange={onCurrentChangeHandler}
          />
        </div>
        <div className="single_input">
          <label htmlFor="target">Target CGPA</label>
          <input
            type="text"
            name="target"
            id="target"
            placeholder="CGPA Here"
            value={target}
            onChange={onTargetChangeHandler}
          />
        </div>
        <div className="single_input">
          <label htmlFor="total_credit">Total Credit Hours so far</label>
          <input
            type="text"
            name="totalCcredit"
            id="total_credit"
            placeholder="Credit Hours Here"
            value={totalCcredit}
            onChange={onTotalCreditChangeHandler}
          />
        </div>
        <div className="single_input">
          <label htmlFor="remaing_credit">Remaining Credit Hours so far</label>
          <input
            type="text"
            name="remaingCredit"
            id="remaing_credit"
            placeholder="Credit Hours Here"
            value={remaingCredit}
            onChange={onRemainingCreditChangeHandler}
          />
        </div>
      </div>
      {/* inputs ends here  */}
      <div className="btn_wrapper">
        <button className="btn btn_calculate" onClick={submitHandler}>
          Calculate
        </button>
        <button className="btn btn_clear" onClick={clearValuesHandler}>
          Clear
        </button>
      </div>
      {/* buttons ends here  */}
    </div>
  );
};

export default CalcForm;
