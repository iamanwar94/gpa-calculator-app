import React from "react";
import "./ResultModal.css";
import ellipse from "./images/Ellipse.png";
import { clickFalse } from "../../../../features/gpaSlice";
import { useDispatch } from "react-redux";

const ResultModal = () => {
  const dispatch = useDispatch();
  const clickHandler = () =>{
    dispatch(clickFalse())
  }
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
          <div className="modal_para_1 modal_para">
            <p>1</p>
            <p>Course Name</p>
            <p>2</p>
            <p>A</p>
          </div>
          <div className="modal_para_2 modal_para">
            <p>2</p>
            <p>Course Name</p>
            <p>2</p>
            <p>A</p>
          </div>
          <div className="modal_para_3 modal_para">
            <p>3</p>
            <p>Course Name</p>
            <p>2</p>
            <p>A</p>
          </div>
        </div>
        <div className="modal_gpa_result">
          <h3>GPA : 3.53</h3>
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
