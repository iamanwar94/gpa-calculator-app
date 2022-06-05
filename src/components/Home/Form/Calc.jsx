import React, { useState } from "react";
import "./Calc.css";

const Calc = () => {
  const [course, setCourse] = useState("");
  const [creditHours, setCreditHours] = useState("");
  const [grade, setGrade] = useState("");

  const onchange = (e) => {
    setCourse(e.target.value);
    setCreditHours(e.target.value);
    setGrade(e.target.value);
  };

  return (
    <div className="">
      <p>
        Our GPA Predictor tells you the minimum GPA you need to achieve a target
        CGPA based on your current CGPA
      </p>
      <div className="input-course-1">
        <input
          type="text"
          name="course"
          placeholder="Course Name"
          value={course}
          onChange={onchange}
        />
        <input
          type="text"
          name="creditHours"
          placeholder="Credit Hours"
          value={creditHours}
          onChange={onchange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={grade}
          onChange={onchange}
        />
      </div>
      <div className="input-course-2">
        <input
          type="text"
          name="course"
          placeholder="Course Name"
          value={course}
          onChange={onchange}
        />
        <input
          type="text"
          name="creditHours"
          placeholder="Credit Hours"
          value={creditHours}
          onChange={onchange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={grade}
          onChange={onchange}
        />
      </div>
      <div className="input-course-3">
        <input
          type="text"
          name="course"
          placeholder="Course Name"
          value={course}
          onChange={onchange}
        />
        <input
          type="text"
          name="creditHours"
          placeholder="Credit Hours"
          value={creditHours}
          onChange={onchange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={grade}
          onChange={onchange}
        />
      </div>
      <div className="input-course-4">
        <input
          type="text"
          name="course"
          placeholder="Course Name"
          value={course}
          onChange={onchange}
        />
        <input
          type="text"
          name="creditHours"
          placeholder="Credit Hours"
          value={creditHours}
          onChange={onchange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={grade}
          onChange={onchange}
        />
      </div>
      <div className="input-course-5">
        <input
          type="text"
          name="course"
          placeholder="Course Name"
          value={course}
          onChange={onchange}
        />
        <input
          type="text"
          name="creditHours"
          placeholder="Credit Hours"
          value={creditHours}
          onChange={onchange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={grade}
          onChange={onchange}
        />
      </div>
      <button className="btn btn-danger w-100">+ Add New Row</button>
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
