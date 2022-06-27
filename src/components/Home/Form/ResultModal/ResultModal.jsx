import React from "react";
import "./ResultModal.css";
import ellipse from "./images/Ellipse.png";
import { clickFalse } from "../../../../features/gpaSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectGpaResult, clearResult, selectGpa } from "../../../../features/GpaResultSlice";

const ResultModal = () => {
  const dispatch = useDispatch();
  const gpaResult = useSelector(selectGpaResult);
  const gpa = useSelector(selectGpa);
  const clickHandler = () => {
    dispatch(clickFalse());
    dispatch(clearResult())
    console.log(gpaResult);
  };
  return (
    <div className="modal_wrapper">
      <div className="modal_form">
        <div className="modal_courses_info">
          <div className="modal_heading">
            <h6>S.N</h6>
            <h6>Course Name</h6>
            <h6>Credit Hours</h6>
            <h6>Points</h6>
          </div>
          {gpaResult.map((result,i) => (
            <div className="modal_para_1 modal_para" key={i}>
              <p>{i+1}</p>
              <p> {result.course}</p>
              <p> {result.creditHours} </p>
              <p>{result.grade}</p>
            </div>
          ))}
        </div>
        <div className="modal_gpa_result">
          <h3>GPA : {gpa}</h3>
        </div>
        <div
          className="gpa_img"
          style={{ backgroundImage: `url('${ellipse}')` }}
        >
          <h2>GPA</h2>
        </div>
        <div className="back_button">
          <button onClick={clickHandler}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
